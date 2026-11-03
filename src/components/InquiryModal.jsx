import { useEffect } from "react";
import { X } from "lucide-react";
import InquiryForm from "./InquiryForm.jsx";
import { Eyebrow } from "./ui.jsx";

export default function InquiryModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  // Unmounting on close also resets the form for the next time it opens
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="inq-title">
      <div className="absolute inset-0 bg-espresso/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto bg-cream p-8 shadow-2xl">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 p-1 text-espresso" aria-label="Close">
          <X size={20} strokeWidth={1.5} />
        </button>
        <Eyebrow>Work With Me</Eyebrow>
        <h3 id="inq-title" className="font-display mt-3 text-3xl text-espresso">
          Let's Work Together
        </h3>
        <p className="font-body mb-6 mt-2 text-[13px] leading-6 text-cocoa">
          Tell me a little about your business and I'll be in touch within one business day.
        </p>
        <InquiryForm idPrefix="modal" />
      </div>
    </div>
  );
}
