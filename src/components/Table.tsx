import AxiosService from "../components/AxiosService";
import React, { SetStateAction, useEffect, useState } from "react";

function Table(props: any) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fonction = props.meth;

  useEffect(() => {
    const func = async () => {
      try {
        setLoading(true);
        var fetchedData;
        // Use the fetchData function from AxiosService
        if (fonction === "general") {
          fetchedData = await AxiosService.general();
        } else if (fonction === "generalDom") {
          fetchedData = await AxiosService.generalDom();
        } else if (fonction === "generalExt") {
          fetchedData = await AxiosService.generalExt();
        } else if (fonction === "attaque") {
          fetchedData = await AxiosService.attaque();
        } else if (fonction === "attaqueDom") {
          fetchedData = await AxiosService.attaqueDom();
        } else if (fonction === "attaqueExt") {
          fetchedData = await AxiosService.attaqueExt();
        } else if (fonction === "defense") {
          fetchedData = await AxiosService.defense();
        } else if (fonction === "defenseDom") {
          fetchedData = await AxiosService.defenseDom();
        } else if (fonction === "defenseExt") {
          fetchedData = await AxiosService.defenseExt();
        }

        setData(fetchedData);
      } catch (error) {
        setError(error as SetStateAction<null>);
      } finally {
        setLoading(false);
      }
    };

    func();
  }, [props.meth]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {(error as { message: string }).message}</p>;
  }
  const renderTableHeaders = () => {
    if (!data || (data as any[]).length === 0) return null;

    const firstItem = data[0];
    return (
      <tr>
        {Object.keys(firstItem).map((columnName, i) => (
          <th key={i}>
            <strong>{columnName}</strong>
          </th>
        ))}
      </tr>
    );
  };

  const renderTableRows = () => {
    if (!data || (data as any[]).length === 0) return null;

    return (data as any[]).map((item, index) => (
      <tr key={index}>
        {Object.values(item).map((columnValue, i) => (
          <td key={i}>{String(columnValue)}</td>
        ))}
      </tr>
    ));
  };
  return (
    <div style={{ overflowX: "auto" }}>
      <table border={1}>
        <tbody>
          {renderTableHeaders()}
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
