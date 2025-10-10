import React from "react";

export default function ClientsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Our Major Clients
        </h2>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {/* Client 1 */}
          <div className="w-16 h-12 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-500">Logo 1</span>
          </div>

          {/* Client 2 */}
          <div className="w-16 h-12 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-500">Logo 2</span>
          </div>

          {/* Client 3 */}
          <div className="w-16 h-12 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-500">Logo 3</span>
          </div>

          {/* Client 4 */}
          <div className="w-16 h-12 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-500">Logo 4</span>
          </div>

          {/* Client 5 */}
          <div className="w-16 h-12 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-500">Logo 5</span>
          </div>

          {/* Client 6 */}
          <div className="w-16 h-12 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-500">Logo 6</span>
          </div>

          {/* Client 7 */}
          <div className="w-16 h-12 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-xs text-gray-500">Logo 7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
