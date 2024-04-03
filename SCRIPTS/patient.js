class Patient {
 
    constructor() {

        this.btnPatient = document.getElementById("btn2");
        this.divPatient = document.getElementById("cads");
        this.btnConsultations = document.getElementById("btn3");
        this.divConsultations = document.getElementById("consultations");
        this.btnInit = document.getElementById("btn1");
        this.center = document.getElementById("center");
        this.btnToCad = document.getElementById("toCad");

        this.isInInit = 1;
        this.isInPatients = 0;
        this.isInConsult = 0;
        this.pageCad = 0;
        this.isInCad = 0;
        this.isInToken = 0;
        this.isReturned = false;

        this.permissions = []; 
        this.newUsers = [];
        this.consultations = [];
        this.numKey = [];

        for (let p = 0; p < 10; p++) {

            this.numKey.push(p.toString());
        };        

        if (this.isInInit == 1) {

            this.setColor(this.btnInit); 
        };

        this.clickBtnPatient();
        this.clickDivPatient();
        this.clickBtnConsultations();
        this.clickDivConsultations();
        this.clickToCad();
    };

    setColor(value) {

        value.style.backgroundColor = "rgb(17, 66, 129)";
    };

    resetColor(value) {

        value.style.backgroundColor = "rgb(10, 137, 215)";
    };

    clickBtnPatient() {

        this.btnPatient.addEventListener('click', e => {

            this.goPatient(); 
        });
    };

    clickDivPatient() {

        this.divPatient.addEventListener('click', e => {

            this.goPatient();
        });
    };

    goPatient() {

        if (this.isInPatients == 0 || this.isInCad == 1) {

            this.isInPatients = 1;

            if (this.isInInit == 1) {

                this.removeInit(); 
            }

            else if (this.isInConsult == 1) {

                this.removeContent();
            }

            else if ((this.isInCad == 1) && (this.pageCad == 1)) {

                this.removeContent();
            };

            this.createContent();

            if (this.newUsers.length == 0) {

                this.createCadElements();
                advise.innerHTML = "Ainda não há pacientes cadastrados.";
                this.btnCad.innerHTML = "CADASTRAR";
            };

            this.isInInit = 0;
            this.isInCad = 0;
            this.pageCad = 0;
            this.isInConsult = 0;
            this.isInToken = 0;
            this.isReturned = false;

            this.setColor(this.btnPatient);
            this.resetColor(this.btnConsultations);
            this.resetColor(this.btnInit);

            this.clickInit();
            this.clickCad();
        };
    };

    clickBtnConsultations() {

        this.btnConsultations.addEventListener('click', e => {

            this.goConsultations();
        });
    };

    clickDivConsultations() {

        this.divConsultations.addEventListener('click', e => {

            this.goConsultations();
        });

    };

    goConsultations() {

        if (this.isInConsult == 0) {

            this.isInConsult = 1; 

            if (this.isInInit == 1) {

                this.removeInit();
            }

            else if (this.isInPatients == 1) {

                this.removeContent();
            };

            this.createContent();

            if (this.consultations.length == 0) {

                this.createCadElements();
                advise.innerHTML = "Ainda não há consultas marcadas";
                this.btnCad.innerHTML = "AGENDAR";
            };

            this.isInPatients = 0;
            this.pageCad = 0;
            this.isInCad = 0;
            this.isInInit = 0;
            this.isInToken = 0;
            this.isReturned = false;

            this.setColor(this.btnConsultations);
            this.resetColor(this.btnInit);
            this.resetColor(this.btnPatient);

            this.clickInit();
            this.clickBtnPatient();
        };
    };

    removeInit() {

        Array.from(document.getElementsByClassName("side")).forEach((item) => {

            item.remove();
        });
    };

    createContent() {

        this.content = document.createElement("div");
        this.center.appendChild(this.content);
        this.content.setAttribute("id", "content");
    };

    createCadElements() {

        let advise = document.createElement("p");
        this.content.appendChild(advise);
        advise.setAttribute("id", "advise");

        this.btnCad = document.createElement("button");
        this.content.appendChild(this.btnCad);
        this.btnCad.setAttribute("id", "btnCad");
    };

    clickInit() {

        this.btnInit.addEventListener('click', e => {

            this.returnInit();
        });
    };

    returnInit() {

        if (this.isInInit == 0) {

            this.isInInit = 1; 

            if ((this.isInPatients == 1) || (this.isInConsult == 1)) {

                this.removeContent(); 
            };

            this.center.innerHTML = `<div class="side" id="left">
                <div class="dataInit" id="cads">

                        <figure class="figInit">
                            <img class="imgInit" src="IMG/people.png" alt="Imagem de pessoa">
                        </figure>

                    <div class="contentQtd">

                        <h2 class="qtd" id="qtdCad">0</h2>
                        <p class="inf">Pacientes cadastrados</p>

                    </div>

                </div>

                <div class="btns">

                    <button id="toCad" class="btnBottom">CADASTRAR</button>

                </div>

            </div>

            <div class="side" id="right">

                <div class="dataInit" id="consultations">

                    <figure class="figInit">
                        <img class="imgInit" src="IMG/calendario.png" alt="calendário">
                    </figure>

                    <div class="contentQtd">

                        <h2 class="qtd" id="qtdCad">0</h2>
                        <p class="inf">Consultas agendadas</p>

                    </div>

                </div>

                <div class="btns">

                    <button id="toAgend" class="btnBottom">AGENDAR</button>

                </div>

            </div>`;

            this.isInCad = 0;
            this.isInConsult = 0;
            this.pageCad = 0;
            this.isInPatients = 0;
            this.isInToken = 0;
            this.isReturned = false;

            this.divPatient = document.getElementById("cads");
            this.divConsultations = document.getElementById("consultations");
            this.btnToCad = document.getElementById("toCad");

            this.setColor(this.btnInit);
            this.resetColor(this.btnPatient);
            this.resetColor(this.btnConsultations);

            this.clickBtnPatient();
            this.clickDivPatient();
            this.clickBtnConsultations();
            this.clickDivConsultations();
            this.clickToCad();
        };
    };

    removeContent() {

        document.getElementById("content").remove();
    };

    clickToCad() {

        this.btnToCad.addEventListener('click', e => {

            this.setColor(this.btnPatient);
            this.resetColor(this.btnInit);
            this.goCad();
        });
    };

    clickCad() {

        this.btnCad.addEventListener('click', e => {

            this.goCad();
        });
    };

    goCad() {

        if (this.pageCad == 0) {

            this.pageCad = 1;
            this.isInCad = 1;
            this.isInPatients = 1;

            if (this.isInInit == 1) {

                this.removeInit();
            }

            else if (this.isInPatients == 1) {

                this.removeContent();
            }

            else if (this.isInToken == 1) {

                this.removeOptions();
                this.question.remove();
                this.titToken.remove();
                this.cxToken.remove();   
            };

            this.isInConsult = 0;
            this.isInInit = 0;
            this.isInToken = 0;

            this.createForm();
        };
    };

    removeOptions() {

        Array.from(document.querySelectorAll("div > a")).forEach((btn) => {
                
            btn.remove();
        });
    };

    createForm() {

        this.createContent();
        let formCad = document.createElement("form");
        this.content.appendChild(formCad);
        formCad.setAttribute("id", "formCad");
        formCad.setAttribute("action", "#");  

        let contents = [];

        let blocks1 = [];
        let labelsdiv1 = [];
        let labels1 = [];
        let inputs1 = [];

        let blocks2 = [];
        let labelsdiv2 = [];
        this.labels2 = [];
        let inputs2 =[];

        this.radio1 = [];
        let labels3 = [];
        this.radio2 = [];
        this.labels4 = [];

        for (let a = 0; a < 2; a++) {

            contents[a] = document.createElement("div");
            formCad.appendChild(contents[a]);
            contents[a].setAttribute("class", "contents");
        };

        for (let b = 0; b < 8; b++) {

            blocks1[b] = document.createElement("div");
            contents[0].appendChild(blocks1[b]);
            blocks1[b].setAttribute("class", "blocks");

            blocks2[b] = document.createElement("div");
            contents[1].appendChild(blocks2[b]);
            blocks2[b].setAttribute("class", "blocks");

            labelsdiv1[b] = document.createElement("div");
            blocks1[b].appendChild(labelsdiv1[b]);
            labelsdiv1[b].setAttribute("class", "labelsdiv");

            labels1[b] = document.createElement("p");
            labelsdiv1[b].appendChild(labels1[b]);
            labels1[b].setAttribute("class", "typeData");
        };

        for (let plus = 0; plus < 7; plus++) {

            labelsdiv2[plus] = document.createElement("div");
            blocks2[plus].appendChild(labelsdiv2[plus]);
            labelsdiv2[plus].setAttribute("class", "labelsdiv");

            this.labels2[plus] = document.createElement("p");
            labelsdiv2[plus].appendChild(this.labels2[plus]);
            this.labels2[plus].setAttribute("class", "typeData");
        };

        labels1[0].innerHTML = "Nome:";
        labels1[1].innerHTML = "CPF:";
        labels1[2].innerHTML = "Idade:";
        labels1[3].innerHTML = "Peso";
        labels1[4].innerHTML = "Celular:";
        labels1[5].innerHTML = "DDD:";
        labels1[6].innerHTML = "Data de nascimento:";
        labels1[7].innerHTML = "Sexo:";
        this.labels2[0].innerHTML = "Estado:";
        this.labels2[1].innerHTML = "Cidade:";
        this.labels2[2].innerHTML = "Bairro:";
        this.labels2[3].innerHTML = "Rua:";
        this.labels2[4].innerHTML = "Número:";
        this.labels2[5].innerHTML = "Email:";

        for (let u = 0; u < 6; u++) {

                inputs1[u] = document.createElement("input");
                inputs1[u].setAttribute("autocomplete", "off");
                inputs1[u].setAttribute("type", "text");
                inputs1[u].setAttribute("name", "datas");
               
        };

        for (let s = 0; s < 5; s++) {

            blocks1[s].appendChild(inputs1[s]);

            inputs2[s] = document.createElement("input");
            blocks2[s + 1].appendChild(inputs2[s]);
            inputs2[s].setAttribute("autocomplete", "off");
            inputs2[s].setAttribute("type", "text");
            inputs2[s].setAttribute("name", "datas");
        };

        blocks1[6].appendChild(inputs1[5]);

        let divSelect = document.createElement("div");
        blocks1[5].appendChild(divSelect);
        divSelect.setAttribute("class", "divSelect");

        divSelect.innerHTML = 
        `<select name="ddd">
            <option value="select">Selecione</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="24">24</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="51">51</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="61">61</option>
            <option value="62">62</option>
            <option value="63">63</option>
            <option value="64">64</option>
            <option value="65">65</option>
            <option value="66">66</option>
            <option value="67">67</option>
            <option value="68">68</option>
            <option value="69">69</option>
            <option value="71">71</option>
            <option value="73">73</option>
            <option value="74">74</option>
            <option value="75">75</option>
            <option value="76">76</option>
            <option value="77">77</option>
            <option value="79">79</option>
            <option value="81">81</option>
            <option value="82">82</option>
            <option value="83">83</option>
            <option value="84">84</option>
            <option value="85">85</option>
            <option value="86">86</option>
            <option value="87">87</option>
            <option value="88">88</option>
            <option value="89">89</option>
            <option value="91">91</option>
            <option value="92">92</option>
            <option value="93">93</option>
            <option value="94">94</option>
            <option value="95">95</option>
            <option value="96">96</option>
            <option value="97">97</option>
            <option value="98">98</option>
            <option value="99">99</option>
        </select>`;

        for (let d = 0; d < 2; d++) {
            
            labels3[d] = document.createElement("label");
            blocks1[7].appendChild(labels3[d]);
            labels3[d].setAttribute("class", "mascFem");

            this.radio1[d] = document.createElement("input");
            this.radio1[d].setAttribute("type", "radio");
            this.radio1[d].setAttribute("name", "gender");
            blocks1[7].appendChild(this.radio1[d]);
            this.radio1[d].setAttribute("class", "cxmf"); 

            this.labels4[d] = document.createElement("label");
            this.labels4[d].setAttribute("class", "descges");
            blocks2[6].appendChild(this.labels4[d]);

            this.radio2[d] = document.createElement("input");
            this.radio2[d].setAttribute("type", "radio");
            this.radio2[d].setAttribute("name", "gest");
            this.radio2[d].setAttribute("class", "cxges");
            blocks2[6].appendChild(this.radio2[d]);
            this.radio2[d].style.display = "none";
        }

        this.radio1[0].setAttribute("id", "male");
        this.radio1[0].setAttribute("value", "male");
        this.radio1[1].setAttribute("id", "female");
        this.radio1[1].setAttribute("value", "female");

        this.radio2[0].setAttribute("id", "yesGes");
        this.radio2[0].setAttribute("value", "yesges");
        this.radio2[1].setAttribute("id", "noges");
        this.radio2[1].setAttribute("value", "noges");

        labels3[0].setAttribute("for", "male");
        labels3[0].innerHTML = "Masculino";
        labels3[1].setAttribute("for", "female");
        labels3[1].innerHTML = "Feminino";

        this.labels4[0].setAttribute("for", "yesges");
        this.labels4[1].setAttribute("for", "noges");

        let divSelect2 = document.createElement("div");
        blocks2[0].appendChild(divSelect2);
        divSelect2.setAttribute("class","divSelect");

        divSelect2.innerHTML = 
        `<select name="location">
            <option value="select">Selecione</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
        </select>`;

        blocks2[7].setAttribute("id", "cxbtform");

        let btnsform = [];

        for (let i = 0; i < 3; i++) {

            btnsform[i] = document.createElement("button");
            btnsform[i].setAttribute("class", "btnsform");
            blocks2[7].appendChild(btnsform[i]);
        };

        btnsform[0].setAttribute("type", "submit");
        btnsform[1].setAttribute("type", "reset");
        btnsform[0].innerHTML = "CADASTRAR";
        btnsform[1].innerHTML = "LIMPAR";
        btnsform[2].innerHTML = "CANCELAR";

        this.form = document.querySelector("form");
        this.allInputs = document.querySelectorAll('input[type="text"]');
        this.select1 = document.querySelector('select[name="ddd"]');
        this.select2 = document.querySelector('select[name="location"]');

        this.allInputs[0].setAttribute("placeholder", "Nome Completo do Paciente");
        this.allInputs[1].setAttribute("placeholder", "Ex: vvv.vvv.vvv-vv");
        this.allInputs[2].setAttribute("placeholder", "Digite a idade (em anos)");
        this.allInputs[3].setAttribute("placeholder", "Digite o peso (Kg)");
        this.allInputs[4].setAttribute("placeholder", "Ex: 99998888");
        this.allInputs[5].setAttribute("placeholder", "MM/DD/AAAA");
        this.allInputs[6].setAttribute("placeholder", "Cidade onde o paciente reside");
        this.allInputs[7].setAttribute("placeholder", "Digite o bairro");
        this.allInputs[8].setAttribute("placeholder", "Digite a Rua");
        this.allInputs[9].setAttribute("placeholder", "Número da Residência");
        this.allInputs[10].setAttribute("placeholder", "Ex: example@email.com");

        this.allInputs[0].value = "igor soares";
        this.allInputs[1].value = "13124878957";
        this.allInputs[2].value = "19";
        this.allInputs[3].value = "70";
        this.allInputs[4].value = "99990000";
        this.allInputs[5].value = "17/05/2004";
        this.allInputs[6].value = "Bela Vista";
        this.allInputs[7].value = "Herculano";
        this.allInputs[8].value = "10";
        this.allInputs[9].value = "528";
        this.allInputs[10].value = "igor@gmail.com";

        this.isFemale();
        this.submitCad();

        this.clickBtnPatient();
        this.clickBtnConsultations();
        this.clickInit();
    };

    isFemale() {

        let femCheck = document.getElementById("female");

        femCheck.addEventListener('click', e => {

            this.labels2[6].innerHTML = "Gestante:";

            for (let a = 0; a < 2; a++) {

                this.radio2[a].style.display = "inline-block";
            };

            this.labels4[0].innerHTML = "SIM";
            this.labels4[1].innerHTML = "NÃO";

            this.isMale();
            this.clickInit();
        });
    };

    isMale() {

        this.radio1[0].addEventListener('click', e => {

            for (let j = 0; j < 2; j++) {

                this.radio2[j].style.display = "none";
                this.radio2[j].innerHTML = " ";
                this.labels4[j].innerHTML =  " ";
            };

            this.labels2[6].innerHTML = " ";
            this.isFemale();
            this.clickInit();
        });
    };

    submitCad() {

        this.form.addEventListener('submit', e => {

            e.preventDefault();
            this.permissions = [];
            
            for (let v = 0; v < 13; v++) {

                this.permissions[v] = true;
            };

            this.validAll(this.allInputs);

            if (this.permissions[0] != true) {

                window.alert(this.permissions[0]);
            }

            else {

                this.validLetters(this.allInputs[0].value);
                this.validCpf(this.allInputs[1].value);
                this.validAge(this.allInputs[2].value); 
                this.validWeight(this.allInputs[3].value);
                this.validCell(this.allInputs[4].value);
                this.validDdd();
                this.validData(this.allInputs[5].value);
                this.validGender();
                this.validLocation();
                this.validLetters(this.allInputs[6].value);
                this.validNum(this.allInputs[9].value);
                this.validEmail(this.allInputs[10].value);

                for (let n = 1; n < 13; n++) {

                    if (this.permissions[n] != true) {

                        window.alert(this.permissions[n]);
                        return;
                    };
                };

                if (this.permissions[12] == true) {

                    this.dataUser();
                };
            };
        });
    }; 

    validAll(value) {

        for (let k = 0; k < 11; k++) {

            if (!value[k].value) {

                this.permissions[0] = "Existem campos não preenchidos! Por favor, preencha todos os campos!";
            }
        }
    }

    validLetters(value) {

        let letterKey = ["a", "á", "b", "c", "d", "e", "é", "f", "g", "h", "i", "í", "j", "k", "l", "m", "n", "o", "ó", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "Á", "B", "C", "D", "E", "É", "F", "G", "H", "I", "Í", "J", "K", "L", "M", "N", "O", "Ó", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "];

        let consonantKey = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

        let vowelKey = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "U"];

        for (let i = 0; i < value.length; i++) {

            if (letterKey.indexOf(value[i]) < 0) {

                if (value == this.allInputs[0].value) {

                    this.permissions[1] = "O nome deve conter apenas letras!";
                    break;
                }

                else if (value == this.allInputs[6].value) {

                    this.permissions[10] = "A cidade deve conter apenas letras!";
                };
            };
        };

        if (this.permissions[1] == true) {

            if (value.length < 4) {

                if (value == this.allInputs[0].value) {

                    this.permissions[1] = "O nome deve conter pelo menos 4 letras!";
                }

                else if (value == this.allInputs[6].value) {

                    this.permissions[10] = "A cidade deve conter ao menos 4 letras";
                };
            }

            else if (value == this.allInputs[0].value) {

                if (value.split(" ").length < 2) {

                    this.permissions[1] = "Digite nome e sobrenome válidos do paciente!";
                };
            }

            else {

                let contC = 0;
                let contV = 0;

                for (let p = 0; p < value.length; p++) {

                    if (consonantKey.indexOf(value[p]) > -1) {

                        contC += 1;
                    };
                };

                for (let h = 0; h < value.length; h++) {

                    if (vowelKey.indexOf(value[h]) > -1) {

                        contV += 1;
                    };
                };

                if ((contC == 0) || (contV == 0)) {

                    if (value == this.allInputs[0].value) {

                        this.permissions[1] = "O nome deve conter pelo menos uma consoante e uma vogal!";
                    }

                    else if (value == this.allInputs[6].value) {

                        this.permissions[10] = "A cidade deve conter pelo menos uma consoante e uma vogal";
                    };
                };
            };
        };
    };

    validCpf(value) {

        if (!(value.length == 11 || value.length == 14) || ((this.validNum(value) == true) && value.length != 11) || ((value.length == 14) && ((value[3] != ".") || (value[7] != ".") || (value[11] != "-")))) {

            this.invalidCpf();
        }

        else if ((this.validNum(value) == false) && (value.length == 11)) {

            this.invalidCpf();
        }

        else {

            let cpfPass = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "-"];

            for (let c = 0; c < value.length; c++) {

                if (cpfPass.indexOf(value[c]) < 0) {

                    this.invalidCpf();
                    break;
                };
            };
        };
    };

    invalidCpf() {

        this.permissions[2] = "Formato de CPF inválido!";
    }

    validNum(value) {

        let access = true;

        for (let x = 0; x < value.length; x++) {

            if (this.numKey.indexOf(value[x]) < 0) {

                if (value == this.allInputs[9].value) {

                    this.invalidNum();
                    break;
                }

                else {

                    access = false;
                    break;
                };
            };   
        };

        if (value == this.allInputs[9].value) {

            if (value > 9999) {

                this.invalidNum();
            };
        };

        if (access == false) {

            return false;
        }

        else {

            return true;
        };
    };

    invalidNum() {

        this.permissions[11] = "Número da residência inválido!";
    };

    validAge(value) {

        if (isNaN(value)) {

            this.permissions[3] = "A idade deve ser numérica (e usado ponto em vez de vírgula)."
        }

        else if (value > 150) {

            this.permissions[3] = "Idade inválida!"    
        }
    }

    validWeight(value) {

        if (isNaN(value)) {

            this.permissions[4] = "O peso deve ser numérico (e usado ponto em vez de vírgula)."
        }

        else if (value > 596) {

            this.permissions[4] = "Peso inválido!"
        }
    }

    validCell(value) {

        if (isNaN(value)) {

            this.permissions[5] = "O celular deve conter apenas números!"
        }

        else if (value.length < 8 || value.length > 9) {

            this.permissions[5] = "O celular deve conter 8 ou 9 números!"
        }
    }

    validDdd() {

        this.selectedDdd = this.select1.options[this.select1.selectedIndex].value

        if ((!this.selectedDdd) || (this.selectedDdd == "select")) {

            this.permissions[6] = "Por favor, selecione um DDD!"
        }
    }

    validData(value) {

        let dataKey = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/"]

        for (let w = 0; w < value.length; w++) {

            if ((dataKey.indexOf(value[w]) < 0) || (value.length != 10) || (value[2] != "/") || (value[5] != "/") || (isNaN(value[0])) || (isNaN(value[1])) || (isNaN(value[3])) || (isNaN(value[4])) || (isNaN(value[6])) || (isNaN(value[7])) || (isNaN(value[8])) || (isNaN(value[9]))) {

                this.permissions[7] = "Formato da data deve ser: DD/MM/AAAA"
                break;
            }
        }

        if  (this.permissions[7] == true) {

            let dates = value.split("/")

            let date = new Date()
            let year = date.toLocaleDateString('pt-br', {year: 'numeric'})
            let month = date.toLocaleDateString('pt-br', {month: 'numeric'})
            let today = date.toLocaleDateString('pt-br', {day: 'numeric'})

            if ((dates[0] > 31) || (dates[1] > 12) || (dates[0] < 1) || (dates[1] < 1) || (dates[2] < 1873)) {

                this.permissions[7] = "Dia/Mês/Ano informados inválidos!"
            }

            else if (((dates[1] == "01") || (dates[1] == "03") || (dates[1] == "05") || (dates[1] == "07") || (dates[1] == "08") || (dates[1] == "10") || (dates[1] == "12")) && (dates[0] > 31)) {
    
                this.invalidDate()
            }
    
            else if (((dates[1] == "04") || (dates[1] == "06") || (dates[1] == "09") || (dates[1] == "11")) && (dates[0] > 30)) {

                this.invalidDate()
            }
    
            else if ((dates[1] == "02") && (dates[0] > 29)) {
    
                this.invalidDate()
            }

            else if (dates[2] > year) {

                this.invalidDate()
            }

            else if (dates[2] == year) {

                if (dates[1] > month) {

                    this.invalidDate
                }

                else if (dates[1] == month) {

                    if (dates[0] > today) {

                        this.invalidDate()
                    }
                }
            }

        }
    }

    invalidDate() {

        this.permissions[7] = "Data informada inválida!"
    }

    validGender() {

        if ((!this.radio1[0].checked) && (!this.radio1[1].checked)) {

            this.permissions[8] = "Por favor, escolha o sexo do paciente."
        }

        else if (this.radio1[1].checked) {

            if ((!this.radio2[0].checked) && (!this.radio2[1].checked)) {

                this.permissions[8] = "Por favor, selecione Sim ou Não para Gestante" 
            }
        }
    }

    validLocation() {

        this.selectedLoc = this.select2.options[this.select2.selectedIndex].value

        if ((!this.selectedLoc) || (this.selectedLoc == "select")) {

            this.permissions[9] = "Por favor, selecione um Estado!"
        }
    }
    
    validEmail(value) {

        let emailKey = [["@"], ["m"], ["a"], ["i"], ["l"], ["."], ["c"], ["o"]]
        
        let block = []

        emailKey.forEach((item, index) => {

            for (let i = 0; i < value.length; i++) {

                if (item.indexOf(value[i]) >= 0) {

                    block[index] = "true"
                }
            }
        })

        for (let j = 0; j < 7; j++) {

            if (block[j] != "true") {

                this.invalidEmail()
            }
        }   

        if (this.permissions[12] == true) {

            let emailVet = value.split("@")
        
            if (emailVet[0].length < 4) {

                this.invalidEmail()
            }
        }
    }

    invalidEmail() {

        this.permissions[12] = "Email inválido!"
    }

    dataUser() {

        let newUser = {}

        newUser["name"] = this.allInputs[0].value
        newUser["cpf"] = this.allInputs[1].value
        newUser["age"] = this.allInputs[2].value
        newUser["weight"] = this.allInputs[3].value
        newUser["cellphone"] = this.allInputs[4].value
        newUser["ddd"] = this.selectedDdd
        newUser["date"] = this.allInputs[5].value
        newUser["location"] = this.selectedLoc
        newUser["city"] = this.allInputs[7].value
        newUser["district"] = this.allInputs[8].value
        newUser["road"] = this.allInputs[9].value
        newUser["number"] = this.allInputs[10].value
        newUser["email"] = this.allInputs[10].value
        newUser["consultation"] = "Não"

        if (this.radio1[0].checked) {

            newUser["gender"] = "Masculino"
            newUser["pregnant"] = "-"
        }

        else if (this.radio1[1].checked) {

            newUser["gender"] = "Feminino"

            if (this.radio2[0].checked) {

                newUser["pregnant"] = "SIM" 
            }

            else if (this.radio2[1].checked) {

                newUser["pregnant"] = "NÃO"
                
            }
        }

        if (this.isReturned == false) {
            
            this.newUsers.push(newUser)
            
            console.log("Novo usuário")
            console.log(this.newUsers[this.newUsers.length -1])
            console.log(`Total de usuários: ${this.newUsers.length}` )
            console.log(this.newUsers)
            this.tokenUser(this.newUsers.length)
        }

        else {

            this.newUsers[this.newUsers.length - 1] = newUser

            console.log("trocou")
            console.log("Novo usuário")
            console.log(this.newUsers[this.newUsers.length -1])
            console.log(`Total de usuários: ${this.newUsers.length}` )
            console.log(this.newUsers)
            this.tokenUser(this.newUsers.length-1)
        }
            
    }

    tokenUser(value) {

        this.isInPatients = 1
        this.isInToken = 1
        this.isInCad = 1
        this.removeContent()
        this.createContent()

        /*this.titToken = document.createElement("p")
        this.cxtit.appendChild(this.titToken)
        this.titToken.setAttribute("id", "tit")
        this.titToken.innerHTML = "Ficha do Paciente"

        this.cxToken = document.createElement("div")
        this.main.appendChild(this.cxToken)
        this.cxToken.setAttribute("id", "content")

        let cxDatas1 = []
        let cxDatas2 = []
        let contentDatas = []

        for (let s = 0; s < 2; s++) {

            contentDatas[s] = document.createElement("div")
            this.cxToken.appendChild(contentDatas[s])   
            contentDatas[s].setAttribute("class", "contents")
        }

        for (let z = 0; z < 8; z++) {

            cxDatas1[z] = document.createElement("div")
            contentDatas[0].appendChild(cxDatas1[z])
            cxDatas1[z].setAttribute("class", "cxDatas")
        }

        for (let cont = 0; cont < 8; cont++) {

            cxDatas2[cont] = document.createElement("div")
            contentDatas[1].appendChild(cxDatas2[cont])
            cxDatas2[cont].setAttribute("class", "cxDatas")
        }

        let cxType1 = []
        let cxType2 = []

        let textType1 = []
        let textType2 = []

        let bodyData1 = []
        let bodyData2 = []

        let textData1 = []
        let textData2 = []

        for (let up = 0; up < 8; up++) {

            cxType1[up] = document.createElement("div")
            cxDatas1[up].appendChild(cxType1[up])
            cxType1[up].setAttribute("class", "cxType1")

            textType1[up] = document.createElement("p")
            cxType1[up].appendChild(textType1[up])
            textType1[up].setAttribute("class", "textType")

            bodyData1[up] = document.createElement("div")
            cxDatas1[up].appendChild(bodyData1[up])
            bodyData1[up].setAttribute("class", "bodyData")

            textData1[up] = document.createElement("p")
            bodyData1[up].appendChild(textData1[up])
            textData1[up].setAttribute("class", "textData")
        }

        for (let x = 0; x < 8; x++) {

            cxType2[x] = document.createElement("div")
            cxDatas2[x].appendChild(cxType2[x])
            cxType2[x].setAttribute("class", "cxType2")

            textType2[x] = document.createElement("p")
            cxType2[x].appendChild(textType2[x])
            textType2[x].setAttribute("class", "textType")

            bodyData2[x] = document.createElement("p")
            cxDatas2[x].appendChild(bodyData2[x])
            bodyData2[x].setAttribute("class", "bodyData")

            textData2[x] = document.createElement("p")
            bodyData2[x].appendChild(textData2[x])
            textData2[x].setAttribute("class", "textData")
        }

        textType1[0].innerHTML = "NOME"
        textType1[1].innerHTML = "IDADE"
        textType1[2].innerHTML = "PESO"
        textType1[3].innerHTML = "SEXO"
        textType1[4].innerHTML = "CELULAR"
        textType1[5].innerHTML = "DDD"
        textType1[6].innerHTML = "DATA DE NASC"
        textType1[7].innerHTML = "CPF"

        textType2[0].innerHTML = "ESTADO"
        textType2[1].innerHTML = "CIDADE"
        textType2[2].innerHTML = "BAIRRO"
        textType2[3].innerHTML = "RUA"
        textType2[4].innerHTML = "NÚMERO"
        textType2[5].innerHTML =  "EMAIL"
        textType2[6].innerHTML = "GESTANTE"
        textType2[7].innerHTML = "CONSULTA MARCADA"

        textData1[0].innerHTML = this.newUsers[value]["name"]
        textData1[1].innerHTML = this.newUsers[value]["age"]
        textData1[2].innerHTML = this.newUsers[value]["weight"]
        textData1[3].innerHTML = this.newUsers[value]["gender"]
        textData1[4].innerHTML = this.newUsers[value]["cellphone"]
        textData1[5].innerHTML = this.newUsers[value]["ddd"]
        textData1[6].innerHTML = this.newUsers[value]["date"]
        textData1[7].innerHTML = this.newUsers[value]["cpf"]

        textData2[0].innerHTML = this.newUsers[value]["location"]
        textData2[1].innerHTML = this.newUsers[value]["city"]
        textData2[2].innerHTML = this.newUsers[value]["district"]
        textData2[3].innerHTML = this.newUsers[value]["road"]
        textData2[4].innerHTML = this.newUsers[value]["number"]
        textData2[5].innerHTML = this.newUsers[value]["email"]
        textData2[6].innerHTML = this.newUsers[value]["pregnant"]
        textData2[7].innerHTML = this.newUsers[value]["consultation"]

        if (this.isInCad == 1) {

            this.question = document.createElement("p")
            this.cxtit.appendChild(this.question)
            this.question.setAttribute("id", "question")
            this.question.innerHTML = "Esta é a ficha gerada do paciente. Você tem certeza que todos os dados estão corretos?"

            this.btnConfirm = []

            for (let k = 0; k < 2; k++) {

                this.btnConfirm[k] = document.createElement("a")
                this.cxtit.appendChild(this.btnConfirm[k])
                this.btnConfirm[k].setAttribute("class", "btnConfirm")        
            }   
        
            this.btnConfirm[0].innerHTML = "Sim, finalizar cadastro"
            this.btnConfirm[1].innerHTML = "Não, voltar ao formulário"

            this.isInConsult = 0
            this.isInInit = 0
            this.pageCad = 0

            this.confirmCad()
            this.returnCad()
        }*/
    }

    confirmCad() {

        this.btnConfirm[0].addEventListener('click', e => {

            window.alert("Cadastro efetuado com sucesso!")
            this.returnInit()
        })
    }

    returnCad() {

        this.btnConfirm[1].addEventListener('click', e => {

            this.isReturned = true
            this.goCad()    
            this.allInputs[0].value = this.newUsers[this.newUsers.length - 1]["name"]
            this.allInputs[1].value = this.newUsers[this.newUsers.length - 1]["cpf"]
            this.allInputs[2].value = this.newUsers[this.newUsers.length - 1]["age"]
            this.allInputs[3].value = this.newUsers[this.newUsers.length - 1]["weight"]
            this.allInputs[4].value = this.newUsers[this.newUsers.length - 1]["cellphone"]
            this.allInputs[5].value = this.newUsers[this.newUsers.length - 1]["ddd"]
            this.allInputs[6].value = this.newUsers[this.newUsers.length - 1]["date"]
            this.allInputs[7].value = this.newUsers[this.newUsers.length - 1]["location"]
            this.allInputs[8].value = this.newUsers[this.newUsers.length - 1]["city"]
            this.allInputs[9].value = this.newUsers[this.newUsers.length - 1]["district"]
            this.allInputs[10].value = this.newUsers[this.newUsers.length - 1]["road"]
            this.allInputs[11].value = this.newUsers[this.newUsers.length - 1]["number"]
            this.allInputs[12].value = this.newUsers[this.newUsers.length - 1]["email"]
        })
    }
}

let person = new Patient()   
  