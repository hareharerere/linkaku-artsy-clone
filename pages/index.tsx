import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <header className="flex justify-between items-center px-6 py-4 border-b shadow-sm sticky top-0 bg-white z-10">
        <h1 className="text-xl font-bold">Linkaku</h1>
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">首页</a>
          <a href="#" className="hover:underline">艺术家</a>
          <a href="#" className="hover:underline">作品</a>
          <a href="#" className="hover:underline">关于我们</a>
        </nav>
      </header>

      <section className="w-full h-[400px] bg-gray-100 flex items-center justify-center text-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">打造属于你的艺术空间</h2>
          <p className="text-gray-600">Linkaku —— 汇聚新锐艺术家的平台</p>
        </div>
      </section>

      <section className="py-6 px-6 bg-white border-b">
        <Input placeholder="搜索艺术家、作品、风格..." className="w-full max-w-lg" />
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {[...Array(8)].map((_, idx) => (
          <Card key={idx} className="hover:shadow-lg transition">
            <img
              src="https://placehold.co/300x300"
              alt="art"
              className="w-full h-60 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-medium">作品标题</h3>
              <p className="text-sm text-gray-500">艺术家名称</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="text-center text-sm text-gray-400 py-6 border-t">
        © 2025 Linkaku - All rights reserved.
      </footer>
    </div>
  );
}
