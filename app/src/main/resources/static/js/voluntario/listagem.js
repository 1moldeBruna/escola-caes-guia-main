document.addEventListener("DOMContentLoaded", () => {
    listagemVoluntarios.functions.pagination.carregarListagemVoluntariosPaginada();
});

var listagemVoluntarios = {
    elements: {
        alert: () => {
            return document.querySelector("#listagem-voluntarios-container div[role=alert]");
        },
        table: () => {
            return document.querySelector("#listagem-voluntarios-container table");
        }
    },
    functions: {
        alert: {
            show: (message, type) => {
                let alert = listagemVoluntarios.elements.alert();
                alert.innerHTML = `<div class="alert ${type}" role="alert">${message}</div>`;
                alert.hidden = false;
            },
            hide: () => {
                let alert = listagemVoluntarios.elements.alert();
                alert.hidden = true;
            }
        },
        table: {
            show: () => {
                let table = listagemVoluntarios.elements.table();
                table.hidden = false;
            },
            hide: () => {
                let table = listagemVoluntarios.elements.table();
                table.hidden = true;
            },
            construirLinhas: (voluntarios) => {
                let linhasTabela = ``;

                voluntarios.forEach(voluntario => linhasTabela += listagemVoluntarios.functions.table.construirLinhas(voluntario));

                return linhasTabela;
            },
            construirLinha: (voluntario) => {
                const baseUrl = document.getElementById("base-url").value;

                const urlVoluntarios = `${baseUrl}/voluntarios/${voluntario.id}`;

                return `
                    <tr id="voluntario-item-list">
                        <td class="">${voluntario.nome}</td>
                        <td class="">${voluntario.estadoCivil}</td>
                        <td class="">${voluntario.funcao}</td>
                        <td class="">${voluntario.identidade}</td>
                        <td class="">${voluntario.rua}</td>
                        <td class="">${voluntario.cidade}</td>
                        <td class="">${voluntario.estado}</td>
                        <td class="">${voluntario.cep}</td>
                        <td class="">${voluntario.numero}</td>
                        <td class="">${voluntario.email}</td>
                        <td class="">${voluntario.telefone}</td>
                        <td class=" text-center">
                            <a class="icon-link icon-link-hover" href="${urlVoluntarios}/visualizar" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                </svg>
                            </a>
                            <a class="icon-link icon-link-hover ms-3" href="${urlVoluntarios}/editar" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502 .646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121 .196l-.805 2.414a.25.25 0 0 0 .316 .316l 2.414-.805a.5.5 0 0 0 .196-.12l 6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            </a>
                            <a
                                class="icon-link icon-link-hover ms-3"
                                href="${urlVoluntarios}/deletar"
                                style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);"
                                data-bs-toggle="modal"
                                data-bs-target="#basicModal"
                                data-bs-modal-header="Excluir voluntario"
                                data-bs-modal-body="Tem certeza que deseja excluir este voluntario?"
                                data-bs-modal-footer-text-cancel="Cancelar"
                                data-bs-modal-footer-text-confirm="Excluir"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                            </svg>
                        </a>
                    </td>
                </tr>
            `;
        }
    },
    pagination: {
        carregarListagemVoluntariosPaginada: () => {
            const baseUrl = document.getElementById("base-url").value;

            // Documentação: https://pagination.js.org
            $('#listagem-voluntarios-container tfoot')
                .pagination({
                    dataSource: `${baseUrl}/rest/voluntarios`,
                    pageSize: 10,
                    locator: "content",
                    ajax: {
                        pageNumberStartWithZero: true
                    },
                    alias: {
                        pageNumber: "page",
                        pageSize: "size"
                    },
                    totalNumberLocator: (response) => response.totalElements,
                    formatAjaxError: (jqXHR, textStatus, errorThrown) => listagemVoluntarios.functions.pagination.onError(jqXHR, textStatus, errorThrown),
                    callback: (data, pagination) => listagemVoluntarios.functions.pagination.onSuccess(data, pagination)
                });
        },
        onError: (jqXHR, textStatus, errorThrown) => {
            console.log("formatAjaxError", jqXHR, textStatus, errorThrown);

            listagemVoluntarios.functions.table.hide();

            let message = "Falha ao carregar a listagem de voluntarios";
            listagemVoluntarios.functions.alert.show(message, alertType.danger);
        },
        onSuccess: (data, pagination) => {
            if (!data.length) {
                listagemVoluntarios.functions.table.hide();

                let message = "Nenhum voluntario cadastrado";
                listagemVoluntarios.functions.alert.show(message, alertType.primary);

                return;
            }

            listagemVoluntarios.functions.alert.hide();

            var linhasTabela = listagemVoluntarios.functions.table.construirLinhas(data);
            $("#listagem-voluntarios-container tbody").html(linhasTabela);

            listagemVoluntarios.functions.table.show();
        }
    },
}
}
const alertType = {
    primary: "alert-primary",
    danger: "alert-danger"
}