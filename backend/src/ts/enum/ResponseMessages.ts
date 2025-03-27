enum ResponseMessages {
    INTERNAL_SERVER_ERROR = "Ocorreu um erro interno",
    USER_ALREADY_EXISTS = "Usuário já está cadastrado",
    USER_NOT_FOUNDED = "Usuário não encontrado",
    USER_CREATED = "Usuário cadastrado com sucesso",
    WRONG_PASSWORD = "Senha incorreta",
    TOKEN_NOT_PROVIDED = "Token authorization não encontrado na requisição",
    TOKEN_INVALID_OR_EXPIRED = "Token inválido ou expirado",
}

export default ResponseMessages