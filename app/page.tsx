"use client";

import { CircleAlert, Clock3, ExternalLink, Plus, ShieldCheck } from "lucide-react";

const benefits = [
  {
    id: "CLM-2024-0089",
    name: "ค่ารักษาพยาบาล (OPD/IPD)",
    subtitle: "รอบปีงบประมาณ 2567",
    total: 25000,
    used: 6500,
    max: 25000,
    amount: 18500,
    unit: "บาท",
    status: "รอการอนุมัติ",
    statusTone: "blue",
  },
  {
    id: "CLM-2024-0075",
    name: "สวัสดิการทันตกรรม",
    subtitle: "ขูดหินปูน อุดฟัน ถอนฟัน",
    total: 3000,
    used: 1000,
    max: 3000,
    amount: 2000,
    unit: "บาท",
    status: "ยืนยันแล้ว",
    statusTone: "green",
  },
  {
    id: "CLM-2024-0062",
    name: "ตรวจสุขภาพประจำปี",
    subtitle: "โรงพยาบาลคู่สัญญา",
    total: 1,
    used: 0,
    max: 1,
    amount: 1,
    unit: "ครั้ง",
    status: "รอการยืนยัน",
    statusTone: "gray",
  },
  {
    id: "benefit-training",
    name: "ฝึกอบรมและพัฒนาตนเอง",
    subtitle: "หลักสูตรอบรมและพัฒนาทักษะ",
    total: 10000,
    used: 2000,
    max: 10000,
    amount: 8000,
    unit: "บาท",
    status: "รออนุมัติ",
    statusTone: "blue",
  },
  {
    id: "benefit-education",
    name: "สวัสดิการการศึกษาบุตร",
    subtitle: "สนับสนุนค่าใช้จ่ายด้านการศึกษา",
    total: 10000,
    used: 3000,
    max: 10000,
    amount: 7000,
    unit: "บาท",
    status: "รออนุมัติ",
    statusTone: "blue",
  },
  {
    id: "benefit-leave",
    name: "สวัสดิการวันหยุดพักผ่อน",
    subtitle: "สิทธิ์วันหยุดพักผ่อนประจำปี",
    total: 10,
    used: 3,
    max: 10,
    amount: 7,
    unit: "วัน",
    status: "รออนุมัติ",
    statusTone: "blue",
  },
];

const history = [
  {
    id: "CLM-2024-0089",
    type: "ค่ารักษาพยาบาล (OPD)",
    date: "15 ต.ค. 2567",
    amount: "1,500 บาท",
    status: "รอการอนุมัติ",
    tone: "warning",
    action: "ดูรายละเอียด",
  },
  {
    id: "CLM-2024-0075",
    type: "สวัสดิการทันตกรรม",
    date: "28 ก.ย. 2567",
    amount: "900 บาท",
    status: "ยืนยันแล้ว",
    tone: "success",
    action: "ดูรายละเอียด",
  },
  {
    id: "CLM-2024-0062",
    type: "ฝึกอบรมและพัฒนาตนเอง",
    date: "10 ส.ค. 2567",
    amount: "2,500 บาท",
    status: "กำลังดำเนินการ",
    tone: "info",
    action: "ดูรายละเอียด",
  },
  {
    id: "CLM-2024-0044",
    type: "ค่ารักษาพยาบาล (OPD)",
    date: "15 ก.ค. 2567",
    amount: "3,200 บาท",
    status: "ปฏิเสธ",
    tone: "danger",
    action: "ดูรายละเอียด",
  },
];

const toneClasses = {
  blue: "bg-blue-100 text-blue-700",
  green: "bg-emerald-100 text-emerald-700",
  gray: "bg-gray-200 text-gray-700",
  warning: "bg-amber-100 text-amber-700",
  success: "bg-emerald-100 text-emerald-700",
  info: "bg-sky-100 text-sky-700",
  danger: "bg-red-100 text-red-700",
};

export default function MyBenefitsPage() {
  return (
    <div className="-m-6 flex min-h-full w-[calc(100%+3rem)] flex-col bg-[#f3f4f6] p-5 text-[#1f2937]">
      <div className="w-full flex-1">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf4ff]">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
            </div>
            <h1 className="text-[22px] font-bold tracking-tight text-gray-900">
              สิทธิ์สวัสดิการของฉัน
            </h1>
          </div>

          <span className="text-sm font-medium text-gray-500">
            6 สิทธิ์สวัสดิการ · เลื่อนเพื่อดูทั้งหมด
          </span>
        </div>

        <div className="rounded-xl border border-[#e5e7eb] bg-white p-3 shadow-sm">
          <div className="max-h-130 space-y-4 overflow-y-auto pr-2">
            {benefits.map((benefit) => {
              const progress = Math.min(
                (benefit.used / benefit.total) * 100,
                100,
              );

              return (
                <div
                  key={benefit.id}
                  className="rounded-xl border border-[#e6e7eb] bg-white p-4 shadow-sm"
                >
                  <div className="grid items-center gap-4 md:grid-cols-[1.2fr_1.2fr_0.5fr_auto]">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h2 className="text-[17px] font-bold text-gray-900">
                          {benefit.name}
                        </h2>
                      </div>

                      <p className="text-sm text-gray-500">
                        {benefit.subtitle}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>วงเงินสิทธิ์</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-blue-600"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      <div className="text-xs text-gray-500">
                        {benefit.unit === "บาท" ? (
                          <>
                            วงเงินทั้งหมด{" "}
                            <span className="font-medium text-gray-700">
                              {benefit.total.toLocaleString()} บาท
                            </span>
                            {" "}· ใช้ไปแล้ว {benefit.used.toLocaleString()} บาท
                          </>
                        ) : (
                          <>
                            ได้รับทั้งหมด{" "}
                            <span className="font-medium text-gray-700">
                              {benefit.total} {benefit.unit}
                            </span>
                            {" "}· ใช้ไปแล้ว {benefit.used} {benefit.unit}
                          </>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-500">คงเหลือ</p>
                      <div className="mt-1 flex items-baseline justify-end gap-1">
                        <span className="text-[22px] font-bold text-blue-700">
                          {benefit.amount.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500">
                          {benefit.unit}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                      >
                        ดูรายละเอียด
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                      >
                        <Plus className="h-4 w-4" />
                        ยื่นเบิก
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-[#e6e7eb] bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#eef0f3] px-4 py-4">
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  รายการเบิกล่าสุด
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  ติดตามสถานะคำขอสวัสดิการของคุณ
                </p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              ดูประวัติการเบิกทั้งหมด <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#f8fafc] text-gray-600">
                <tr>
                  {[
                    "เลขที่คำขอ",
                    "ประเภทสวัสดิการ",
                    "วันที่ยื่นคำขอ",
                    "จำนวนเงินที่ขอเบิก",
                    "สถานะ",
                    "รายละเอียด",
                  ].map((header) => (
                    <th
                      key={header}
                      className="whitespace-nowrap border-b border-[#eef0f3] px-4 py-3 font-medium"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {history.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-[#eef0f3] last:border-b-0"
                  >
                    <td className="px-4 py-3 font-medium text-gray-700">
                      {item.id}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{item.type}</td>
                    <td className="px-4 py-3 text-gray-700">{item.date}</td>
                    <td className="px-4 py-3 text-gray-700">{item.amount}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${toneClasses[item.tone as keyof typeof toneClasses]}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        {item.action}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-[#eef0f3] px-4 py-3 text-xs text-gray-500">
            <span>แสดง {history.length} รายการล่าสุด</span>
            <span>หน้า 1 จาก 1</span>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-[#e6e7eb] bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eef6ff] text-blue-700">
              <CircleAlert className="h-4 w-4" />
            </div>
            <span className="font-medium text-gray-800">
              ข้อมูลนี้เป็นรายการสวัสดิการที่สามารถยื่นคำขอได้ตามเงื่อนไขของบริษัท
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
