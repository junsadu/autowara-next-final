// Autowara - Next.js 기반 중고차 수출+내수 병행 플랫폼 MVP

import { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";

const cars = [
  {
    id: "tucson-2018",
    name: "2018 현대 투싼",
    mileage: "151,000km",
    price_krw: "₩10,500,000",
    price_usd: "$6,500",
    category: "domestic",
    thumbnail: "https://example.com/images/tucson-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=W3jDSHcWu2E",
    description_ko: "미션오버홀 완료, 파노라마썬루프 포함, 실매물",
    description_en: "Mission overhauled, panoramic sunroof, verified listing",
    language: ["ko", "en"]
  },
  {
    id: "sorento-2020",
    name: "2020 기아 쏘렌토",
    mileage: "89,000km",
    price_krw: "₩18,900,000",
    price_usd: "$13,900",
    category: "export",
    thumbnail: "https://example.com/images/sorento-2020.jpg",
    video_url: "https://www.youtube.com/watch?v=dummy",
    description_ko: "무사고, 1인소유, 수출용 Grade A",
    description_en: "Accident-free, single owner, export Grade A",
    language: ["ko", "en"]
  }
];

export default function Home() {
  const [lang, setLang] = useState("ko");
  const filtered = cars.filter((c) => c.language.includes(lang));

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Autowara 차량 리스트</h1>
        <div className="space-x-2">
          <Button onClick={() => setLang("ko")}>한국어</Button>
          <Button onClick={() => setLang("en")}>English</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((car) => (
          <Card key={car.id}>
            <CardContent className="p-4">
              <img src={car.thumbnail} alt={car.name} className="rounded-xl mb-2" />
              <h2 className="text-xl font-semibold">{car.name}</h2>
              <p>주행거리: {car.mileage}</p>
              <p>{lang === "ko" ? `가격: ${car.price_krw}` : `Price: ${car.price_usd}`}</p>
              <p className="mt-2 text-sm text-gray-600">
                {lang === "ko" ? car.description_ko : car.description_en}
              </p>
              <div className="mt-3 space-x-2">
                <Link href={`/cars/${car.id}`} className="text-blue-500 underline">
                  {lang === "ko" ? "자세히 보기" : "View Details"}
                </Link>
                <a href={car.video_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  {lang === "ko" ? "영상 보기" : "Watch Video"}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
