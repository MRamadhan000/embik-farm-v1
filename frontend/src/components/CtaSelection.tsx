"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Users, ArrowRight, Award, Shield, Info } from "lucide-react";

export default function CTASelection() {
    const router = useRouter();

    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full text-green-700 text-sm font-semibold mb-6">
                            <Users className="w-4 h-4" />
                            Partnership Program
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Ayo Kita Bekerja <span className="text-green-600">Sama</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Bergabunglah bersama Embik Farm untuk membangun sinergi yang saling menguntungkan.
                            Kembangkan usaha Anda dengan dukungan premium dan pelatihan dari tim kami.
                        </p>

                        {/* Benefits */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div className="text-center p-4 bg-green-50 border border-green-100 rounded-lg">
                                <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
                                <div className="font-bold text-gray-900">Komisi Menarik</div>
                                <div className="text-sm text-gray-600">Hingga 25%</div>
                            </div>
                            <div className="text-center p-4 bg-green-50 border border-green-100 rounded-lg">
                                <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                                <div className="font-bold text-gray-900">Prioritas Pasokan</div>
                                <div className="text-sm text-gray-600">Stok Terjamin</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: CTA Section */}
                    <div className="px-20">
                        <div className="flex flex-col gap-12">
                            <button
                                onClick={() => router.push("/mitra")}
                                aria-label="Lihat detail benefit Mitra"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                            >
                                Lihat Benefit Mitra
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <button
                                onClick={() => router.push("/reseller")}
                                aria-label="Lihat detail benefit Reseller"
                                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                            >
                                Lihat Benefit Reseller
                                <ArrowRight className="w-5 h-5" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}