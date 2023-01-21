import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import './Table.css';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'firstName',
    headerName: 'Имя',
    width: 130,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Фамилия',
    width: 130,
    editable: true,
  },
  {
    field: 'Contacts',
    headerName: 'Контакты',
    type: 'string',
    width: 90,
    editable: true,
  },
  {
    field: 'creationDate',
    headerName: 'Дата создания',
    type: 'date',
    width: 160,
    editable: true,
  },

  {
    field: 'status',
    headerName: 'Статус',
    type: 'date',
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', Contacts: '3534455', creationDate: '25.05.2022' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', Contacts: '4224321', creationDate: '25.05.2022', status: 'online' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', Contacts: '4543332', creationDate: '25.05.2022' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', Contacts: '1612334', creationDate: '25.05.2022' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', Contacts: null, creationDate: '25.05.2022', status: 'online' },
  { id: 6, lastName: 'Melisandre', firstName: null, Contacts: '1504433', creationDate: '25.05.2022' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', Contacts: '4423456', creationDate: '25.05.2022' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', Contacts: '3634233', creationDate: '25.05.2022', status: 'online' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', Contacts: '6533344', creationDate: '25.05.2022' },
];

export default function DataTable() {
  return (
    <div className="Table">
      <h3 className='Table__title'>Последние заказы</h3>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          {...rows}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowClassName={(params) => `super-app-theme--${params.row.status}`}

        />

      </div>
    </div>

  );
}