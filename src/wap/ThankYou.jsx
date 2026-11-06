import { useEffect, useState } from 'react'
import { brand } from './content.js'
import { clearStoredCart } from './cart.js'
import { PalmMark } from './PalmMark.jsx'

export function ThankYou() {
  const [state, setState] = useState({ kind: 'loading' })

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id')
    if (!sessionId) {
      setState({ kind: 'missing' })
      return
    }

    let cancelled = false
    ;(async () => {
      for (let attempt = 0; attempt < 10 && !cancelled; attempt++) {
        const res = await fetch(`/api/wap/order-status?session_id=${encodeURIComponent(sessionId)}`)
        if (res.ok) {
          const data = await res.json()
          if (data.status !== 'awaiting_payment') {
            clearStoredCart()
            setState({ kind: 'success', confirmationNumber: data.confirmationNumber, email: data.email })
            return
          }
        }
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }
      if (!cancelled) setState({ kind: 'pending' })
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-wap-paper text-wap-ink">
      <header className="border-b border-wap-ink/10 px-5 py-4 md:px-10">
        <a href="/" className="inline-flex items-center gap-3 font-display text-xl font-semibold tracking-tight">
          <PalmMark />
          <span>West African Produce</span>
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-20 md:px-10 md:py-28">
        {state.kind === 'loading' && <p className="text-lg text-wap-ink/70">Confirming your payment…</p>}

        {state.kind === 'success' && (
          <>
            <p className="text-sm font-semibold text-wap-palm">Thank you</p>
            <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-7xl">Thank you for your purchase.</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-wap-ink/80">
              Your receipt has been emailed to <strong className="text-wap-ink">{state.email}</strong>.
            </p>
            {state.confirmationNumber && (
              <p className="mt-4 text-sm text-wap-ink/60">
                Confirmation <span className="font-mono tracking-wider text-wap-ink">{state.confirmationNumber}</span>
              </p>
            )}
            <a href="/" className="wap-btn mt-12 w-fit px-8">
              Back to the shop
            </a>
          </>
        )}

        {state.kind === 'pending' && (
          <>
            <h1 className="font-display text-5xl font-semibold tracking-tight">We are confirming your payment.</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-wap-ink/80">
              If you were charged and no receipt arrives soon, write to {brand.email}.
            </p>
            <a href="/" className="wap-btn mt-12 w-fit px-8">
              Back to the shop
            </a>
          </>
        )}

        {state.kind === 'missing' && (
          <>
            <h1 className="font-display text-5xl font-semibold tracking-tight">No order to show.</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-wap-ink/80">
              If you just paid, check the receipt in your email or return to the shop to order again.
            </p>
            <a href="/" className="wap-btn mt-12 w-fit px-8">
              Back to the shop
            </a>
          </>
        )}
      </main>
    </div>
  )
}
