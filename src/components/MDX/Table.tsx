type Props = {
  children: React.ReactNode;
}

export default function Table({ children }: Props) {
  return <table className="mb-5">
    {children}
  </table>
}


Table.Head = function TableHead({ children }: Props) {
  return <thead className="bg-ctp-teal bg-opacity-20">
    {children}
  </thead>
}

Table.Body = function TableBody({ children }: Props) {
  return <tbody className="bg-gradient-to-b from-ctp-crust to-ctp-base">
    {children}
  </tbody>
}

Table.Row = function TableRow({ children }: Props) {
  return <tr className="">
    {children}
  </tr>
}


Table.CellHeader = function TableCellHeader({ children }: Props) {
  return <th className="border-2 border-ctp-overlay0 p-1">
    {children}
  </th>
}


Table.Data = function TableData({ children }: Props) {
  return <td className="border-2 border-ctp-overlay0 p-1">
    {children}
  </td>
}
