"use client";

import { useState } from "react";
import { ArrowRightIcon } from "./icons";

const initialValues = {
  name: "",
  email: "",
  businessName: "",
  projectNeeds: "",
  message: "",
};

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Nama wajib diisi.";
  }

  if (!values.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Format email belum valid.";
  }

  if (!values.projectNeeds.trim()) {
    errors.projectNeeds = "Kebutuhan project wajib diisi.";
  }

  if (!values.message.trim()) {
    errors.message = "Pesan wajib diisi.";
  }

  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState(initialValues);
  const [fieldErrors, setFieldErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setFieldErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[name];
      return nextErrors;
    });

    setToast(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFieldErrors({});
    setToast(null);

    const clientErrors = validateForm(formData);

    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setToast({
        type: "error",
        title: "Data wajib belum lengkap",
        message: "Isi dulu nama, email, kebutuhan project, dan pesan sebelum mengirim.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setFieldErrors(result.errors ?? {});
        setToast({
          type: "error",
          title: "Form belum terkirim",
          message: result.message ?? "Masih ada input yang perlu dicek lagi.",
        });
        return;
      }

      setFormData(initialValues);
      setToast({
        type: "success",
        title: "Dummy lead berhasil dibuat",
        message: `${result.message} ID referensi: ${result.leadId}.`,
        meta: result.submittedAt,
      });
    } catch {
      setToast({
        type: "error",
        title: "Koneksi bermasalah",
        message: "Request dummy belum berhasil diproses. Coba kirim sekali lagi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="card-panel p-6 sm:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Mulai Percakapan
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-[2rem]">
            Ceritakan kebutuhan project kamu
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Isi form singkat ini. Untuk dummy project ini, cukup isi data penting dulu biar tetap simpel tapi terlihat proper.
          </p>
        </div>

        <form className="space-y-5" noValidate onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              error={fieldErrors.name}
              label="Nama"
              name="name"
              onChange={handleChange}
              placeholder="Nama lengkap kamu"
              required
              value={formData.name}
            />
            <FormField
              error={fieldErrors.email}
              label="Email"
              name="email"
              onChange={handleChange}
              placeholder="nama@bisnis.com"
              required
              type="email"
              value={formData.email}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              error={fieldErrors.businessName}
              label="Nama Bisnis"
              name="businessName"
              onChange={handleChange}
              placeholder="Opsional"
              value={formData.businessName}
            />
            <FormField
              error={fieldErrors.projectNeeds}
              label="Kebutuhan Project"
              name="projectNeeds"
              onChange={handleChange}
              placeholder="Website, SaaS, dashboard, automasi"
              required
              value={formData.projectNeeds}
            />
          </div>

          <div>
            <label className="field-label" htmlFor="message">
              Pesan
            </label>
            <textarea
              className="field-textarea"
              id="message"
              name="message"
              onChange={handleChange}
              placeholder="Ceritakan goal, tantangan, atau workflow yang ingin kamu perbaiki."
              required
              value={formData.message}
            />
            {fieldErrors.message ? (
              <p className="mt-2 text-sm text-[#ba1a1a]">{fieldErrors.message}</p>
            ) : null}
          </div>

          <button
            className="button-primary w-full sm:w-auto"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Mengirim..." : "Kirim Permintaan"}
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </form>
      </div>

      {toast ? (
        <div className="fixed inset-x-4 top-5 z-[90] sm:left-auto sm:right-6 sm:w-full sm:max-w-sm">
          <div
            className={`rounded-[1.25rem] border p-4 shadow-[0_28px_60px_-30px_rgba(11,28,48,0.45)] backdrop-blur ${
              toast.type === "success"
                ? "border-primary/20 bg-white/96"
                : "border-[#ba1a1a]/15 bg-white/96"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                  toast.type === "success" ? "bg-primary" : "bg-[#ba1a1a]"
                }`}
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">{toast.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-strong">{toast.message}</p>
                {toast.meta ? (
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">
                    {new Date(toast.meta).toLocaleString("id-ID")}
                  </p>
                ) : null}
              </div>
              <button
                aria-label="Tutup notifikasi"
                className="rounded-full p-1 text-muted transition hover:bg-surface-muted hover:text-foreground"
                onClick={() => setToast(null)}
                type="button"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function FormField({
  error,
  label,
  name,
  onChange,
  placeholder,
  required = false,
  type = "text",
  value,
}) {
  return (
    <div>
      <label className="field-label" htmlFor={name}>
        {label}
        {required ? <span className="ml-1 text-[#ba1a1a]">*</span> : null}
      </label>
      <input
        className="field-input"
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
      {error ? <p className="mt-2 text-sm text-[#ba1a1a]">{error}</p> : null}
    </div>
  );
}
