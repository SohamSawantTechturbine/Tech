import React from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import 'antd/dist/reset.css'; // Reset styles for Ant Design v5
 // Tailwind CSS styles

interface CustomTableProps<T> extends TableProps<T> {
  dataSource: T[];
  columns: TableProps<T>['columns'] | any;
  loading: boolean;
  rowKey: string | ((record: T) => string);
}

const CustomTable = <T extends object>({
  columns,
  dataSource,
  loading,
  rowKey,
  ...rest
}: CustomTableProps<T>) => {
  return (
    <div className="p-4 shadow-md rounded-lg border border-black">
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={rowKey}
        pagination={{ pageSize: 10 }}
        className="w-full border border-collapse border-double border-black"
        {...rest}
      />
    </div>
  );
};

export default CustomTable;
