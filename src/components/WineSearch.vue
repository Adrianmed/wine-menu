<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Let us help you find the right wine.</p>
    <br />
    <div style="min-width: 1000px; margin: auto">
      <ais-instant-search :search-client="searchClient" index-name="wine-list">
        <ais-search-box />
        <br />
        <ais-hits style="columns: 4">
          <tr style="margin=auto !important" slot="item" slot-scope="{ item }">
            <td>
              <p style="text-align: center">
                <b>{{ item.name }}</b>
              </p>
              <p style="text-align: center; color: #3a416f">
                {{ item.year }} {{ item.domain }} {{ item.type }}
              </p>
              <img v-bind:src="item.image" height="100px" />
              <br /><br /><br />
              <p style="text-align: center">
                <b>${{ item.price }}</b>
              </p>
              <hr size="" width="" color="" />
            </td>
          </tr>
        </ais-hits>
      </ais-instant-search>
    </div>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite-min.css";

export default {
  props: {
    msg: String,
  },
  data() {
    return {
      searchClient: algoliasearch(
        "N9Y64ZXX9A",
        "8a46fd2e060a03e5716ca60eb0f85f10"
      ),
    };
  },
};
</script>

<style >
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
body {
  font-family: sans-serif;
  padding: 1em;
}
table {
  border: none;
  border-collapse: collapse;
}
tr {
  margin: auto !important;
}
td {
  border: none;
}

.ais-Hits-item {
  box-shadow: none;
}
</style>
