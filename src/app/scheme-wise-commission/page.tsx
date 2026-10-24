'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Eye, X, ExternalLink, FileText, Search, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface AMCItem {
  sr: number;
  name: string;
  file: string;
}

const AMC_LIST: AMCItem[] = [
  { sr: 1, name: 'Abakkus Mutual Fund', file: 'ABAKKUS BROKERAGE STRUCTURE SEP MONTH.pdf' },
  { sr: 2, name: 'Aditya Birla Sun Life Mutual Fund', file: 'ABSL BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 3, name: 'Axis Mutual Fund', file: 'AXIS BROKERAGE STRUCTURE SEP MONTH.pdf' },
  { sr: 4, name: 'Bajaj Finserv Mutual Fund', file: 'BAJAJ BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 5, name: 'Bandhan Mutual Fund', file: 'BANDHAN BROKERAGE STRUCTURE JULY TO NOTICE.pdf' },
  { sr: 6, name: 'Canara Robeco Mutual Fund', file: 'CANARA BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 7, name: 'DSP Mutual Fund', file: 'DSP BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 8, name: 'Edelweiss Mutual Fund', file: 'EDELWEISS BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 9, name: 'Franklin Templeton Mutual Fund', file: 'FRANKLIN BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 10, name: 'HDFC Mutual Fund', file: 'HDFC BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 11, name: 'Helios Mutual Fund', file: 'HELIOS BROKERAGE STRUCTURE JULY TO SEP-compressed.pdf' },
  { sr: 12, name: 'HSBC Mutual Fund', file: 'HSBC BROKERAGE STRUCTURE AUG MONTH.pdf' },
  { sr: 13, name: 'ICICI Prudential Mutual Fund', file: 'ICICI BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 14, name: 'Invesco Mutual Fund', file: 'INVESCO BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 15, name: 'Kotak Mutual Fund', file: 'KOTAK BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 16, name: 'LIC Mutual Fund', file: 'LIC BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 17, name: 'Mahindra Manulife Mutual Fund', file: 'MAHINDRA BROKERAGE STRUCTURE JULY TO NOTICE.pdf' },
  { sr: 18, name: 'Mirae Asset Mutual Fund', file: 'MIRAE BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 19, name: 'Motilal Oswal Mutual Fund', file: 'MOTILAL BROKERAGE STRUCTURE JULY TO NOTICE.pdf' },
  { sr: 20, name: 'Nippon India Mutual Fund', file: 'NIPPON BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 21, name: 'PGIM India Mutual Fund', file: 'PGIM BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 22, name: 'PPFAS Mutual Fund', file: 'PPFAS BROKERAGE STRUCTURE SEP MONTH.pdf' },
  { sr: 23, name: 'Quant Mutual Fund', file: 'QUANT BROKERAGE STRUCTURE SEP MONTH.pdf' },
  { sr: 24, name: 'SBI Mutual Fund', file: 'SBI BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 25, name: 'Sundaram Mutual Fund', file: 'SUNDARAM BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 26, name: 'Tata Mutual Fund', file: 'TATA BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 27, name: 'UTI Mutual Fund', file: 'UTI BROKERAGE STRUCTURE JULY TO SEP.pdf' },
  { sr: 28, name: 'WhiteOak Capital Mutual Fund', file: 'WHITEOAK BROKERAGE STRUCTURE JULY TO SEP.pdf' },
];

export default function SchemeWiseCommissionPage() {
  const [search, setSearch] = useState('');
  const [selectedPdf, setSelectedPdf] = useState<AMCItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPdf) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPdf]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPdf(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filtered = AMC_LIST.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 bg-[#ffffff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-6">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/registration-disclosure" className="hover:text-amber-600 transition-colors">Disclosures</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Scheme-Wise Commission</span>
        </div>

        {/* Title and Search Bar matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Mutual Fund
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Brokerage structure schedules across partnered Asset Management Companies (AMCs)
            </p>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search AMC..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/40 bg-white shadow-xs"
            />
          </div>
        </div>

        {/* Table exactly matching user design */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#212529] text-white">
                  <th className="py-3.5 px-4 font-bold text-xs uppercase w-20">
                    SR.NO
                  </th>
                  <th className="py-3.5 px-4 font-bold text-xs uppercase">
                    AMC NAME
                  </th>
                  <th className="py-3.5 px-4 font-bold text-xs uppercase w-36 text-center">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="py-10 text-center text-slate-500">
                      No mutual fund AMCs found matching &quot;{search}&quot;.
                    </td>
                  </tr>
                ) : (
                  filtered.map((item, idx) => (
                    <tr
                      key={item.sr}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50/80 transition-colors' : 'bg-[#f8f9fa] hover:bg-slate-100/80 transition-colors'}
                    >
                      <td className="py-3.5 px-4 text-slate-700 font-medium">
                        {item.sr}
                      </td>
                      <td className="py-3.5 px-4 text-slate-900 font-medium">
                        {item.name}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => setSelectedPdf(item)}
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-[#3f6212] bg-[#8ec61f]/15 hover:bg-[#8ec61f] hover:text-slate-950 border border-[#8ec61f]/30 rounded-md transition-all cursor-pointer shadow-xs"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View PDF</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="mt-4 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>* Brokerage and trail commission schedules as communicated by respective AMCs.</span>
          <span className="font-medium text-slate-600">ARN: {COMPANY_INFO.arn} | {COMPANY_INFO.legalName}</span>
        </div>

      </div>

      {/* PDF Viewer Popup Modal */}
      {selectedPdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[88vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-white">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-[#8ec61f]/15 border border-[#8ec61f]/30 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#3f6212]" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                    {selectedPdf.name}
                  </h2>
                  <p className="text-xs text-slate-500 truncate max-w-xs sm:max-w-md">
                    {selectedPdf.file}
                  </p>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-2">
                <a
                  href={`/AMCs/${encodeURIComponent(selectedPdf.file)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in new tab"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open in New Tab</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedPdf(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                  title="Close Modal (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal PDF Viewer Body */}
            <div className="relative flex-1 w-full bg-slate-100">
              <iframe
                src={`/AMCs/${encodeURIComponent(selectedPdf.file)}#toolbar=1`}
                title={selectedPdf.name}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
