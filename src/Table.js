import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nama</th>
                <th>Pekerjaan</th>
                <th>Operasi</th>
            </tr>
        </thead>        
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={ index }>
                <td>{ row.nama }</td>
                <td>{ row.pekerjaan }</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{ rows }</tbody>
    )
}

const Table = (props) => {
    const { characterData, removeCharacter } = props

    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

export default Table