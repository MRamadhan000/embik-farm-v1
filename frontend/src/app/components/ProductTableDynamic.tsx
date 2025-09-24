import React from "react";

interface Column<T, K extends keyof T = keyof T> {
  key: K;
  label: string;
  align?: "left" | "center" | "right";
  getClassName?: (value: T[K]) => string;
  render?: (value: T[K], row: T) => React.ReactNode;
}

interface ProductTableDynamicProps<T extends Record<string, unknown>> {
  data: T[];
  columns: Column<T>[];
  tableHeaderBg?: string;
}

const ProductTableDynamic = <T extends Record<string, unknown>>({
  data,
  columns,
  tableHeaderBg = "bg-gradient-to-r from-emerald-500 to-teal-500",
}: ProductTableDynamicProps<T>) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={`${tableHeaderBg} text-white`}>
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`px-8 py-6 font-bold text-lg text-${col.align || "left"}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-slate-50 transition-colors">
                {columns.map((col, colIndex) => {
                  const value = row[col.key];
                  return (
                    <td
                      key={colIndex}
                      className={`px-8 py-6 font-semibold text-slate-900 text-${
                        col.align || "left"
                      } ${col.getClassName ? col.getClassName(value as T[typeof col.key]) : ""}`}
                    >
                      {col.render
                        ? col.render(value as T[typeof col.key], row)
                        : (value as React.ReactNode)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTableDynamic;