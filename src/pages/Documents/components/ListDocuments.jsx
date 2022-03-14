import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import {
  deleteDocumentApi,
  getDocuments,
  setFiltersDocuments,
} from "../../../redux/documents/actions";
import Avatar from "../../components/Avatar";

const ListDocuments = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state);
  const {
    loading,
    table: { data: dataStore },
    filters,
  } = list;

  useEffect(() => {
    dispatch(getDocuments(filters));
  }, [filters]);

  const handleClick = (filter) => {
    // 1 = page, 10 = per page
    dispatch(setFiltersDocuments(filter, 1, 10));
  };

  const handleChange = ({ target: { value } }) => {
    // 1 = page
    dispatch(setFiltersDocuments(filters.status, 1, value));
  };

  const handleDelete = (id) => {
    dispatch(deleteDocumentApi(id, filters));
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Nombre del documento",
        accessor: "file_file_name",
        width: 500,
        direction: "left",
        // eslint-disable-next-line
        Cell: ({ row: { original } }) => {
          return (
            <div className="flex items-center">
              <div
                className={`${
                  // eslint-disable-next-line
                  original.state === "completed"
                    ? "bg-green-900"
                    : "bg-yellow-500"
                } w-3 h-3 rounded-full mr-2`}
              />
              {/* eslint-disable-next-line */}
              <p>{original.fileName}</p>
            </div>
          );
        },
      },
      {
        Header: "Participantes",
        width: 500,
        direction: "left",
        Cell: ({ row: { original } }) => {
          return original.signers.map((signer, index) => (
            <p key={index}>{signer}</p>
          ));
        },
      },
      {
        Header: "Creado",
        accessor: "createdAt",
        width: 500,
        direction: "left",
        // eslint-disable-next-line
        Cell: ({ row: { original } }) => {
          // eslint-disable-next-line
          const date = new Date(original.createdAt);
          return (
            <p>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
          );
        },
      },
      {
        Header: "Propietario",
        width: 500,
        direction: "left",
        Cell: () => {
          return <Avatar className="bg-gray-900 text-white m-1" />;
        },
      },
      {
        Header: "Opciones",
        direction: "left",
        // eslint-disable-next-line
        Cell: ({ row: { original } }) => {
          return (
            <button
              className="text-red-800"
              // eslint-disable-next-line
              onClick={() => handleDelete(original.id)}
            >
              Eliminar
            </button>
          );
        },
      },
    ],
    // eslint-disable-next-line
    [dataStore]
  );

  const data = React.useMemo(() => dataStore, [dataStore]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useGlobalFilter,
      useSortBy
    );

  return (
    <>
      <div className="flex items-center py-8">
        <span>Filtros</span>
        <div className="w-1/2 h-1 bg-gray-900 rounded-full mx-2" />
        <div className="flex items-center">
          <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2" />
          <p className="cursor-pointer" onClick={() => handleClick("progress")}>
            En progreso
          </p>
        </div>
        <div className="flex items-center mx-4">
          <div className="bg-green-500 w-3 h-3 rounded-full mr-2" />
          <p
            className="cursor-pointer"
            onClick={() => handleClick("completed")}
          >
            Firmado
          </p>
        </div>
        <div className="flex items-center">
          <div className="bg-gray-900 w-3 h-3 rounded-full mr-2" />
          <p className="cursor-pointer" onClick={() => handleClick("all")}>
            Todos
          </p>
        </div>
      </div>
      <table {...getTableProps()} className="r-table table">
        <thead>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // eslint-disable-next-line
                <th
                  {...column.getHeaderProps({
                    style: {
                      minWidth: column.minWidth,
                      width: column.width,
                      textAlign: column.direction,
                    },
                  })}
                >
                  <span>{column.render("Header")}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {loading ? (
            <tr>
              <td colSpan="5" className="text-center">
                ...Cargando
              </td>
            </tr>
          ) : (
            <>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    NO HAY DOCUMENTOS
                  </td>
                </tr>
              ) : (
                rows.map((row) => {
                  prepareRow(row);
                  return (
                    // eslint-disable-next-line
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          // eslint-disable-next-line
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              )}
            </>
          )}
        </tbody>
      </table>
      <div className="mt-2">
        <span>Ver </span>
        <select
          name="select"
          value={filters.perPage}
          onChange={handleChange}
          className="mx-1"
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        <span>documentos por página</span>
      </div>
    </>
  );
};

export default ListDocuments;
