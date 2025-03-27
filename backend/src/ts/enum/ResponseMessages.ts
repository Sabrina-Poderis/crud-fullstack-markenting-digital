enum ResponseMessages {
    INTERNAL_SERVER_ERROR = "Ocorreu um erro interno",
    USER_ALREADY_EXISTS = "Usuário já está cadastrado",
    USER_NOT_FOUNDED = "Usuário não encontrado",
    USER_CREATED = "Usuário cadastrado com sucesso",
    CLIENT_ALREADY_EXISTS = "Cliente já está cadastrado",
    CLIENTS_NOT_FOUNDED = "Clientes não encontrados",
    CLIENT_NOT_FOUNDED = "Cliente não encontrado",
    CLIENT_CREATED = "Cliente cadastrado com sucesso",
    CLIENT_DELETED = "Cliente deletado com sucesso",
    CLIENT_UPDATED = "Cliente cadastrado com sucesso",
    WRONG_PASSWORD = "Senha incorreta",
    TOKEN_NOT_PROVIDED = "Token authorization não encontrado na requisição",
    TOKEN_INVALID_OR_EXPIRED = "Token inválido ou expirado",
}

export default ResponseMessages