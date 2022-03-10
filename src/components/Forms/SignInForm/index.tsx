import { Link } from "react-router-dom";
import { Container } from "../styles";

export const SignInForm = () => {
    
    return (
        <Container>
            <section>
                <div id="form-header">
                    <h1>ENTRE</h1>
                    <p><span>Ou </span><Link to="/cadastro">crie uma conta</Link></p>
                </div>
    
                <form>
    
                    <label>
                        <div className="label">
                            CPF *
                        </div>
                        <input type="tel" name="cpf" placeholder="Ex.: 12345678910"/>
                    </label>
    
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