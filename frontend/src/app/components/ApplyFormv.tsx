'use client'
import React, { useState } from "react";
import InputField from "./InputField";
import TextareaField from "./TextAreaField";
import SelectField from "./SelectField";

interface FormData {
  fullName: string;
  email: string;
  whatsapp: string;
  address: string;
  selectedProduct: string;
  paymentMethod: string;
}

interface ApplyFormProps {
  productOptions: string[];
  paymentMethods: string[];
  onSubmit: (data: FormData) => void;
}

const ApplyForm: React.FC<ApplyFormProps> = ({ productOptions, paymentMethods, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    whatsapp: "",
    address: "",
    selectedProduct: "",
    paymentMethod: "",
  });

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField label="Nama Lengkap" value={formData.fullName} onChange={(v) => handleChange('fullName', v)} placeholder="Masukkan nama lengkap Anda" />
        <InputField label="Email" type="email" value={formData.email} onChange={(v) => handleChange('email', v)} placeholder="nama@email.com" />
        <InputField label="WhatsApp" value={formData.whatsapp} onChange={(v) => handleChange('whatsapp', v)} placeholder="08xxxxxxxxxx" />
        <TextareaField label="Alamat Lengkap" value={formData.address} onChange={(v) => handleChange('address', v)} placeholder="Jl. Contoh No. 123, Kelurahan, Kecamatan, Kota" />
        <SelectField label="Produk yang Diminati" value={formData.selectedProduct} options={productOptions} onChange={(v) => handleChange('selectedProduct', v)} />
        <SelectField label="Metode Pembayaran Pilihan" value={formData.paymentMethod} options={paymentMethods} onChange={(v) => handleChange('paymentMethod', v)} />
        <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
          Daftar Sekarang
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;