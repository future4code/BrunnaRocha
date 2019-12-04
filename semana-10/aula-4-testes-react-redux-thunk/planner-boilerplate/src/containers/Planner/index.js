import React from "react";
import { connect } from "react-redux";

class Planner extends React.Component {
  render() {
    return <div>
      <label htmlFor="Tarefa">Tarefa: </label>
      <input type="text" />
      <select name="" id="">
        <option value="Selecione o dia">Selecione o dia</option>
        <option value="Segunda-feira">Segunda-feira</option>
        <option value="Terça-feira">Terça-feira</option>
        <option value="Quarta-feira">Quarta-feira</option>
        <option value="Quinta-feira">Quinta-feira</option>
        <option value="Sexta-feira">Sexta-feira</option>
        <option value="Sabado">Sábado</option>
        <option value="Domingo">Domingo</option>
      </select>
      <button>Criar tarefa</button>

    </div>;
  }
}

export default connect()(Planner);
