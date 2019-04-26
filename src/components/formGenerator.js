import React from "react";

class FormGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hey: "ss"
    };
  }
  getFormFromApi() {
    this.setState({
      form: JSON.parse(
        '{"form":{"action":"#","type":"post","title":"Formulario"},"data":[{"input":{"label":"Nombre","lenght":10,"placeholder":"Nombre","type":"text"}},{"select":{"label":"departamento","options":[{"Name":"Option1","Value":"value1","selected":true},{"Name":"Option2","Value":"value3","selected":true}]}},{"input":{"label":"Nombre","lenght":10,"placeholder":"Nombre","type":"number","value":"2"}}]}'
      )
    });
  }
  componentDidMount() {
    this.getFormFromApi();
  }
  renderForm() {
    var items = [];
    this.state.form.data.forEach((element, id) => {
      items.push(<Item key={`input-${id}`} bulma={true} item={element} />);
    });
    return <React.Fragment>{items}</React.Fragment>;
  }
  render() {
    let form = this.state.form ? this.state.form : null;

    return (
      <div className="wrap">
        {form ? (
          <form action="">
            <div className="content">
              {form.form && (
                <React.Fragment>
                  <Title form={form.form} />
                  <div className="content-form">{this.renderForm()}</div>
                </React.Fragment>
              )}
            </div>
          </form>
        ) : (
          <div>another vid</div>
        )}
      </div>
    );
  }
}

const Item = ({ item, bulma = false }) => {
  if (item.input) {
    return (
      <React.Fragment>
        <div
          className={`content-form-input form-input ${
            bulma == true ? "control " : ""
          }`}
        >
          {item.input.label && <label htmlFor="">{item.input.label}</label>}
        </div>
      </React.Fragment>
    );
  } else if (item.select) {
    return (
      <React.Fragment>
        <div className="content-form-input form-select">
          {item.select.label && <label htmlFor="">{item.select.label}</label>}
        </div>
      </React.Fragment>
    );
  } else {
    return "";
  }
};

const Title = ({ form = null }) => {
  if (form != null) {
    if (form.title) {
      let title = form.title;
      return (
        <React.Fragment>
          {title != null ? (
            <div className="content-title">
              <h3>{title}</h3>
            </div>
          ) : (
            ""
          )}
        </React.Fragment>
      );
    } else {
      return "";
    }
  } else {
    return "";
  }
};

export default FormGenerator;
