const templateFn = example_data =>  `
  <style>
    h1{
      font-size:20px;
    }
    .wc_container{
      border:1px solid red;
      width:95%;
      padding:0 10px 10px 10px;
    }
    .data_placeholder{
      background-color:#eeeeee;
      margin-bottom:10px;
      padding:5px 0px 8px 5px;
    }
  </style>
  <div class="wc_container">
    <h1>Remote data loaded...</h1>
    <div class="data_placeholder" style="width:75%;">${example_data[0].title}</div>
    <div class="data_placeholder" style="width:60%;">${example_data[1].title}</div>
    <div class="data_placeholder" style="width:70%;">${example_data[2].title}</div>
    <div class="data_placeholder" style="width:65%;">${example_data[3].title}</div>
    <div class="data_placeholder" style="width:75%;">${example_data[4].title}</div>
    <div class="data_placeholder" style="width:60%;">${example_data[5].title}</div>
    <div class="data_placeholder" style="width:70%;">${example_data[6].title}</div>
    <div class="data_placeholder" style="width:65%;">${example_data[7].title}</div>
    <div class="data_placeholder" style="width:65%;">${example_data[8].title}</div>
    <div class="data_placeholder" style="width:65%;">${example_data[9].title}</div>
  </div>
`

class SimpleWC extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const fetch_response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const fetch_data = await fetch_response.json()
    // console.log("fetch_data", fetch_data)
    this.root.innerHTML = templateFn(fetch_data)
  }
}

customElements.define('simple-wc', SimpleWC);
