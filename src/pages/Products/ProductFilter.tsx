export default function ProductFilter({ onSelectedCategory }) {
  return (
    <div className="p-4">
      <label>Lọc theo danh mục</label>
      <select
        className="mt-2 w-full rounded border border-gray-300 p-2"
        onChange={(e) => {
          onSelectedCategory(e.target.value);
        }}
      >
        <option value="all">Tất cả</option>
        <option value="QUAN">Quần</option>
        <option value="AO">Áo</option>
        <option value="GIAY">Giày</option>
        <option value="PHU_KIEN">Phụ kiện</option>
      </select>
    </div>
  );
}
