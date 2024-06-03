import { DataGrid } from '@mui/x-data-grid';

function obterColunas(propriedades, largura = 100) {
    return Object.keys(propriedades).map(propriedade => ({ field: propriedade, headerName: propriedade, width: largura }))
}

export default function DataTable({ data }) {
    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={obterColunas(data[0])}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20, 50]}
                checkboxSelection
            />
        </div>
    );
}