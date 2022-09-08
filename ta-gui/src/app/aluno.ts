export class Aluno {
    nome: string|undefined;
    cpf: string|undefined;
    email: string|undefined;
    requisito: string|undefined;
    gerencia: string|undefined;
    metas: Map<string,string> ;
    
    constructor() {
        this.clean();
    }

    clean(): void {
        this.nome = "";
        this.cpf = "";
        this.email = "";
        this.requisito = "";
        this.gerencia = "";
        this.metas = new Map<string,string>();
    }

    clone(): Aluno {
        var aluno: Aluno = new Aluno();
        aluno.nome = this.nome;
        aluno.cpf = this.cpf;
        aluno.email = this.email;
        aluno.requisito = this.requisito;
        aluno.gerencia = this.gerencia;
        aluno.metas = this.cloneMetas();
        return aluno;
    }

    cloneMetas(): Map<string,string> {
        var metas: Map<string,string> = new Map<string,string>();
        for (let key in this.metas) {
            var k = this.metas.get(key);
            if(k){
                metas.set(key,k);
            }  
        }
        return metas;
    }
  }