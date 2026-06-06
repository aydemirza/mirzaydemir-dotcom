"use client";

import { useState, useEffect, useRef } from "react";
import * as XLSX from "xlsx";

type Props = {
  file: string;
};

export default function ExcelPreview({ file }: Props) {
  const [sheets, setSheets] = useState<{ name: string; html: string }[]>([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(file);
        const buf = await res.arrayBuffer();
        const wb = XLSX.read(buf, { type: "array" });

        const parsed = wb.SheetNames.map((name) => {
          const ws = wb.Sheets[name];
          const html = XLSX.utils.sheet_to_html(ws, { editable: false });
          return { name, html };
        });

        setSheets(parsed);
      } catch {
        setError("Failed to load spreadsheet.");
      } finally {
        setLoading(false);
      }
    })();
  }, [file]);

  if (loading)
    return (
      <div className="excel-viewer-box">
        <p style={{ color: "#888", fontStyle: "italic", padding: 40, textAlign: "center" }}>
          Loading spreadsheet...
        </p>
      </div>
    );
  if (error) return <p style={{ color: "var(--muted)" }}>{error}</p>;
  if (sheets.length === 0) return null;

  const iframeDoc = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #fff; }
  table { border-collapse: collapse; font-size: 11px; }
  td, th { border: 1px solid #e0e0e0; padding: 3px 8px; white-space: nowrap; color: #333; }
  th { background: #f5f5f5; font-weight: 600; position: sticky; top: 0; z-index: 1; }
  tr:nth-child(even) td { background: #fafafa; }
  tr:hover td { background: #f0f0f0; }
</style>
</head>
<body>${sheets[active].html}</body>
</html>`;

  return (
    <div className="excel-viewer">
      {sheets.length > 1 && (
        <div className="excel-tabs">
          {sheets.map((s, i) => (
            <button
              key={s.name}
              className={`excel-tab ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              {s.name}
            </button>
          ))}
        </div>
      )}
      <div className="excel-viewer-box">
        <iframe
          ref={iframeRef}
          srcDoc={iframeDoc}
          title="Spreadsheet Preview"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </div>
  );
}
