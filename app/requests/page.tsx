"use client";

import { useState } from "react";
import { Folder1, InfoCircle, Megaphone1 } from "@tailgrids/icons";

const steps = [
  "ผู้รับสิทธิ์",
  "กรอกข้อมูลใบเสร็จ",
  "แนบเอกสารหลักฐาน",
  "ตรวจสอบความถูกต้อง",
  "สำเร็จ",
];

const documents = [
  {
    title: "1. ใบเสร็จรับเงิน",
    description:
      "ต้องระบุเลขที่ใบเสร็จ วันที่รับบริการ และยอดเงินที่ชำระอย่างชัดเจนและถูกต้องสมบูรณ์",
    note: "ระบุเลขที่ · วันที่ · ยอดเงิน",
    icon: "▤",
  },
  {
    title: "2. ใบรับรองแพทย์ / ใบรับรองการรักษา",
    description:
      "ออกโดยสถานพยาบาลหรือคลินิกที่ได้รับการรับรอง ระบุการตรวจรักษาหรือวินิจฉัยโรค",
    note: "สถานพยาบาลที่ผ่านการรับรอง",
    icon: "▤",
  },
];

const conditions = [
  {
    title: "ระยะเวลายื่นคำขอ",
    description:
      "ต้องยื่นคำขอเบิกภายใน 60 วัน นับจากวันที่ระบุในใบเสร็จรับเงิน",
    icon: "◷",
  },
  {
    title: "สถานพยาบาลที่เข้ารับการรักษา",
    description:
      "ต้องเป็นสถานพยาบาลของรัฐ หรือโรงพยาบาล / คลินิกเอกชนที่ได้รับการรับรองตามมาตรฐานกระทรวงสาธารณสุข",
    icon: "▦",
  },
];

export default function ClaimPage() {
  const [claimant, setClaimant] = useState("self");

  return (
    <div className="-m-6 flex min-h-full w-[calc(100%+3rem)] flex-col bg-[#faf8f7] p-3 md:p-5">
      <div className="flex w-full flex-1 flex-col">
        {/* Step Header */}
        <section className="mb-5 rounded-xl border border-gray-100 bg-white p-5 md:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="size-9 rounded-lg bg-gray-100 hover:bg-gray-200">
                ←
              </button>

              <div>
                <p className="text-[11px] text-blue-600">
                  กระบวนการยื่นคำขอเบิกสวัสดิการ
                </p>

                <h2 className="text-base font-bold md:text-lg">
                  ยื่นเบิกค่ารักษาพยาบาล (OPD / IPD)
                </h2>
              </div>
            </div>

            <div className="hidden rounded-full bg-gray-100 px-3 py-2 text-xs sm:block">
              ขั้นตอนที่ - จาก -
            </div>
          </div>

          {/* Progress */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex items-center gap-3 rounded-lg p-2 ${
                  index === 0 ? "bg-[#f1f2ff]" : ""
                }`}
              >
                <div
                  className={`flex size-9 shrink-0 items-center justify-center rounded-lg font-semibold ${
                    index === 0
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {index + 1}
                </div>

                <div>
                  <p className="text-[10px] text-gray-400">
                    {index === 0 ? "ขั้นตอนปัจจุบัน" : "ขั้นตอนถัดไป"}
                  </p>

                  <p className="text-xs font-semibold">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
          {/* Left Content */}
          <div className="min-w-0 space-y-5">
            {/* Documents */}
            <section className="rounded-xl border border-gray-100 bg-white p-5 md:p-7">
              <div className="mb-5">
                <h3 className="text-base font-bold md:text-lg">
                  เลือกผู้รับสิทธิ์ (Claimant Selection)
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  เลือกผู้ที่ใช้สิทธิสวัสดิการในคำขอนี้
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  {
                    id: "self",
                    title: "ตัวฉันเอง",
                    description: "ยื่นคำขอเบิกสวัสดิการสำหรับพนักงาน",
                  },
                  {
                    id: "family",
                    title: "พนักงานในแผนก",
                    description: "ยื่นคำขอแทนพนักงานในแผนกของคุณ",
                  },
                ].map((option) => (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition ${
                      claimant === option.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="claimant"
                      value={option.id}
                      checked={claimant === option.id}
                      onChange={() => setClaimant(option.id)}
                      className="mt-1 accent-blue-600"
                    />
                    <span>
                      <span className="block text-sm font-semibold text-gray-900">
                        {option.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-gray-600">
                        {option.description}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-gray-100 bg-white p-5 md:p-7">
              <div className="mb-5">
                <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-blue-600">
                  <Folder1 />
                  เอกสารหลักฐานที่ต้องใช้
                </p>

                <h3 className="text-base font-bold md:text-lg">
                  เอกสารที่ต้องจัดเตรียมให้พร้อมก่อนเริ่มกรอกข้อมูล
                </h3>

                <p className="mt-1 text-xs leading-6 text-gray-500">
                  โปรดตรวจสอบว่าท่านมีเอกสารตัวจริงหรือไฟล์ภาพ/PDF
                  <br />
                  ครบถ้วนตามรายการที่ระบบกำหนด
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {documents.map((doc) => (
                  <div
                    key={doc.title}
                    className="flex min-h-55 flex-col rounded-lg bg-[#f6f3f2] p-5"
                  >
                    <div className="mb-4 flex size-9 items-center justify-center rounded-md bg-white text-lg text-blue-600">
                      {doc.icon}
                    </div>

                    <h4 className="mb-2 text-sm font-bold">{doc.title}</h4>

                    <p className="flex-1 text-xs leading-6 text-gray-600">
                      {doc.description}
                    </p>

                    <p className="mt-4 text-[10px] text-gray-600">
                      <span className="text-blue-600">✓</span> {doc.note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Information */}
              <div className="mt-5 flex items-start gap-3 rounded-lg bg-[#faf9f8] p-4">
                <span className="text-lg text-blue-600">
                  <InfoCircle />
                </span>

                <p className="text-xs leading-6">
                  ในขั้นตอนที่ 3 ระบบจะให้แนบไฟล์เอกสารทั้งสองรายการนี้
                  กรุณาถ่ายภาพหรือสแกนไฟล์ให้มีความชัดเจน
                </p>
              </div>
            </section>

            {/* Conditions */}
            <section className="rounded-xl border border-gray-100 bg-white p-5 md:p-7">
              <div className="mb-5">
                <p className="mb-3 text-[11px] font-semibold text-blue-600">
                  ◉ ระเบียบและเงื่อนไขการเบิกสวัสดิการ
                </p>

                <h3 className="text-base font-bold">
                  เงื่อนไขสำคัญที่ต้องปฏิบัติตาม
                </h3>
              </div>

              <div className="space-y-2">
                {conditions.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-lg bg-[#f6f3f2] p-4"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-blue-600">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="mb-1 text-xs font-bold">{item.title}</h4>

                      <p className="text-xs leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Special Condition */}
                <div className="flex items-start gap-3 rounded-lg bg-[#f6f3f2] p-4">
                  <span className="mt-1">
                    <Megaphone1 />
                  </span>

                  <div>
                    <h4 className="mb-1 text-xs font-bold">
                      ข้อชี้แจงกรณีสวัสดิการภัยพิบัติ
                    </h4>

                    <p className="text-xs leading-6 text-gray-600">
                      กรณีสวัสดิการพิเศษ เช่น ภัยพิบัติ / น้ำท่วม
                      จะต้องแจ้งความเสียหายและให้ HR เป็นผู้พิจารณา
                      อนุมัติจำนวนเงิน โดยไม่ผ่านแบบฟอร์มการเบิกจ่ายปกติ
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Content - Budget */}
          <aside className="rounded-xl border border-gray-100 bg-white p-5">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-sm font-bold">▣ สิทธิ์ที่กำลังยื่นเบิก</h3>

              <span className="rounded-full bg-[#f0f1ff] px-2 py-1 text-[10px] font-semibold text-blue-700">
                OPD / IPD
              </span>
            </div>

            <p className="mb-1 text-[11px] text-gray-500">
              วงเงินคงเหลือที่เบิกได้
            </p>

            <div className="flex items-baseline gap-1">
              <span className="text-[29px] font-bold">18,500</span>

              <span className="text-xs text-gray-500">บาท</span>
            </div>

            {/* Progress Bar */}
            <div className="my-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{ width: "26%" }}
              />
            </div>

            <div className="mb-6 flex justify-between text-[10px] text-gray-500">
              <span>ใช้ไปแล้ว 6,500 บาท</span>
              <span>26%</span>
            </div>

            {/* Budget Details */}
            <div className="space-y-3 rounded-lg bg-[#f6f3f2] p-4">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">วงเงินสิทธิ์ทั้งปี</span>

                <span className="font-semibold">25,000 บาท</span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-gray-500">ใช้ไปแล้วสะสม</span>

                <span>6,500 บาท</span>
              </div>

              <div className="flex justify-between pt-1 text-xs">
                <span className="font-semibold text-blue-600">
                  วงเงินสูงสุดต่อครั้ง
                </span>

                <span className="text-sm font-bold text-blue-600">
                  2,000 บาท
                </span>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-gray-500">
              ▣ สิทธิ์พนักงานประจำปีงบประมาณ 2567
            </p>
          </aside>
        </div>

        {/* Footer */}
        <section className="mt-auto flex flex-col-reverse items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white p-4 sm:flex-row">
          <button className="text-xs font-medium text-gray-700"></button>

          <button className="w-full rounded-md bg-blue-600 px-6 py-3 text-xs font-semibold text-white hover:bg-blue-700 sm:w-auto">
            เริ่มกรอกข้อมูล (ถัดไป) →
          </button>
        </section>
      </div>
    </div>
  );
}
