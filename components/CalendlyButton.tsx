"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { profile } from "@/lib/data";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function CalendlyButton() {
  const [ready, setReady] = useState(false);
  const configured = Boolean(profile.calendlyUrl);

  useEffect(() => {
    if (!configured) return;
    if (document.getElementById("calendly-widget-script")) {
      setReady(true);
      return;
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setReady(true);
    document.body.appendChild(script);
  }, [configured]);

  function open() {
    if (window.Calendly && profile.calendlyUrl) {
      window.Calendly.initPopupWidget({ url: profile.calendlyUrl });
    }
  }


}
