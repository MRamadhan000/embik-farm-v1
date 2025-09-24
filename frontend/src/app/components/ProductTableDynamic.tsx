import React from "react";

interface Column<T> {
  key: keyof T;
  label: string;
  align?: "left" | "center" | "right";
  // Optional: fungsi untuk conditional class
  getClassName?: (value: any) => string;
  render?: (value: any, row: T) => React.ReactNode; // custom render
}

interface ProductTableDynamicProps<T> {
  data: T[];
  columns: Column<T>[];
  tableHeaderBg?: string;
}

const ProductTableDynamic = <T extends Record<string, any>>({
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
                      className={`px-8 py-6 font-semibold text-slate-900 text-${col.align || "left"} ${
                        col.getClassName ? col.getClassName(value) : ""
                      }`}
                    >
                      {col.render ? col.render(value, row) : value}
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
