import React from 'react';
import School from "../../__source/js/School";

class Body extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      showSchools: [],
      masterSchools: [],
      search: props.search
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    return this.loadSchools()
  }

  shouldComponentUpdate(){
    return true;
  }

  handleSearch(event){
    this.setState({search: event.target.value});
    this.getSchools();
  }

  loadSchools(){
    fetch('https://apis.claytonkreisel.com/ncaa/v1/schools/?key=123456789012345&school_name=' + this.props.search, {
      method: 'GET'
    })
    .then((res) => {
      return res.json();
    })
    .then(
      (result) => {
        if(result.success){
          const schoolComponents = result.data.schools.map(school =>
            <School
              key={school.id}
              mascot={school.mascot}
              division={school.division}
              city={school.city}
              state={school.state}
              color={school.primary_color}
              name={school.name}
              conference={school.conference_name}
            />
          );
          this.setState({
            masterSchools: result.data.schools,
            showSchools: schoolComponents,
            isLoaded: true
          });
        } else {
          this.setState({
            error: true,
            isLoaded: true
          });
        }
      },
      (error) => {
        this.setState({
          error: true,
          isLoaded: true
        });
      }
    );
  }

  getSchools(){
    const schoolsUpdated = this.state.masterSchools.filter((school) => {
      if(school.name.toLowerCase().search(this.state.search.toLowerCase()) > -1 || school.full_name.toLowerCase().search(this.state.search.toLowerCase()) > -1) return true;
      return false;
    });
    const schoolComponents = schoolsUpdated.map(school =>
      <School
        key={school.id}
        mascot={school.mascot}
        division={school.division}
        city={school.city}
        state={school.state}
        color={school.primary_color}
        name={school.name}
        conference={school.conference_name}
      />
    );
    this.setState({showSchools: schoolComponents});
  }

  render(){
    const { error, isLoaded, showSchools, search } = this.state;
    if(error){
      return <div>Whoops</div>
    } else if(!isLoaded) {
      return (
        <div className="app-holder is-loading">
          <img src="assets/img/loading.gif" />
        </div>
      )
    } else {
      return (
        <div className="app-holder">
          <section className="searchbar">
            <input name="college-search" placeholder="Type a name..." defaultValue={search} onChange={this.handleSearch} type="text" />
          </section>
          <section className="schools">
            {showSchools}
          </section>
        </div>
      )
    }
  }

}

export default Body;
