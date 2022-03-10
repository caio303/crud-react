import { Container } from "../styles";

export const SignUpForm = () => {

    return (
        <Container>
            <section>
                <div id="form-header">
                    <h1>CADASTRE-SE</h1>
                    <p>Registre-se em nossa plataforma de graça!</p>
                </div>

                <form>
                    
                    <div className="input-wrapper">
                        <label>
                            <div className="label">
                                Nome *    
                            </div>
                            <input type="text" name="nome" maxLength={30} placeholder="Ex.: Silvio" />
                        </label>
                        <label>
                            <div className="label">
                                Sobrenome *
                            </div>
                            <input type="text" name="sobrenome" maxLength={30} placeholder="Ex.: Santos"/>
                        </label>
                    </div>

                    <label>
                        <div className="label">
                            Email *
                        </div>
                        <input type="email" name="email" placeholder="Ex.: silviosantos@sbt.com"/>
                    </label>
                
                    <div className="input-wrapper">
                        <label>
                            <div className="label">
                                CPF *
                            </div>
                            <input type="tel" name="cpf" maxLength={11} placeholder="Ex.: 12345678910"/>
                        </label>
                        <label>
                            <div className="label">
                                Data de nasc. *
                            </div>
                            <input type="text" name="dataNasc" placeholder="Ex.: 04/05/1995"/>
                        </label>
                    </div>

                    <label>
                        <div className="label">
                            Senha *
                        </div>
                        <input type="password" name="senha" placeholder="Ex.: S3nh4f0rte@_3306"/>
                    </label>

                    <button type="submit">Enviar</button>

                </form>
            </section>
        </Container>
    )
} 