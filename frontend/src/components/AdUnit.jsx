export default function AdUnit({ slot, format = "auto" }) {
  return (
    <div className="w-full overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
        }}
        data-ad-client="YOUR_ADSENSE_CLIENT_ID"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
