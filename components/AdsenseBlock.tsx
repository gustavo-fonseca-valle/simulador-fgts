"use client"

import { useEffect } from "react"

export default function AdsenseBlock() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <ins
  className="adsbygoogle"
  style={{ display: "block" }}
  data-ad-client="ca-pub-5817280149271380"
  data-ad-slot="5061237754"
  data-ad-format="auto"
  data-full-width-responsive="true"
/>
  )
}