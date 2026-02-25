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
      data-ad-client="SEU_ID_AQUI"
      data-ad-slot="SEU_SLOT_AQUI"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}