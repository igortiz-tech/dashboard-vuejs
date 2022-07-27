<template>
    <div id="Restaurante">
      <v-container fluid class="dataTable" >
        <v-row>
          <v-col>
            <material-card-flat
                color="#0088B7"
                title="Listagem de Restaurante"
                text="Utilize os filtros para facilitar a busca por restaurante."
            >
              <div>
                <v-table density="compact">
                <thead>
                <tr>
                  <th class="text-left">
                    ID
                  </th>
                  <th class="text-left">
                    Nome
                  </th>
                  <th class="text-left">
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="item in restaurantes"
                    :key="item.id"
                >
                  <td>{{ item.id }}</td>
                  <td>{{ item.nome }}</td>
                  <td class="text-right">
                    <v-icon icon="mdi-dots-vertical"></v-icon>
                  </td>
                </tr>
                </tbody>
              </v-table>
              </div>
            </material-card-flat>
          </v-col>
        </v-row>
      </v-container>

<!--      <v-container fluid class="dataTable" >
        <v-row>
          <v-col>
            <material-card-flat
                color="#0088B7"
                title="Listagem de Restaurante"
                text="Utilize os filtros para facilitar a busca por restaurante."
            >
              <div>
                <v-table density="compact">
                  <thead>
                  <tr>
                    <th class="text-left">
                      ID
                    </th>
                    <th class="text-left">
                      Nome
                    </th>
                    <th class="text-left">
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="item in restaurantes"
                      :key="item.id"
                  >
                    <td>{{ item.id }}</td>
                    <td>{{ item.nome }}</td>
                    <td class="text-right">
                      <v-icon icon="mdi-dots-vertical"></v-icon>
                    </td>
                  </tr>
                  </tbody>
                </v-table>
              </div>
            </material-card-flat>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="dataTable" >
        <v-row>
          <v-col>
            <material-card
                color="#0088B7"
                title="Listagem de Restaurante"
                text="Utilize os filtros para facilitar a busca por restaurante."
            >
              <div>
                <v-table density="compact">
                  <thead>
                  <tr>
                    <th class="text-left">
                      ID
                    </th>
                    <th class="text-left">
                      Nome
                    </th>
                    <th class="text-left">
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="item in restaurantes"
                      :key="item.id"
                  >
                    <td class="te">{{ item.id }}</td>
                    <td>{{ item.nome }}</td>
                    <td class="text-right">
                      <v-icon icon="mdi-dots-vertical"></v-icon>
                    </td>
                  </tr>
                  </tbody>
                </v-table>
              </div>
            </material-card>
          </v-col>
        </v-row>
      </v-container>-->

      <v-container fluid class="dataTable" >
        <v-row>
          <v-col>
            <material-card
                color="#0088B7"
                title="Listagem de Restaurante"
                text="Utilize os filtros para facilitar a busca por restaurante."
            >
              <div>
                <vue3-easy-data-table
                    :rows-items="[10, 25, 50]"
                    :rows-per-page="10"
                    :headers="headers"
                    :items="items"
                />
              </div>
            </material-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="dataTable" >
        <v-row>
          <v-col>
            <material-card-flat
                color="blue"
                title="Listagem de Restaurante"
                text="Utilize os filtros para facilitar a busca por restaurante."
            >
              <div>
                <vue3-easy-data-table
                    :rows-items="[10, 25, 50]"
                    :rows-per-page="10"
                    :headers="headers"
                    :items="items"
                />
              </div>
            </material-card-flat>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>
<script>
import restaurantesServices from "../../services/restaurantesServices";
import Restaurante from "../../models/Restaurante";
import MaterialCardFlat from "../../components/material/CardFlat.vue";
import MaterialCard from "../../components/material/Card.vue";
import Vue3EasyDataTable from "vue3-easy-data-table";

export default {
  name: 'restaurante-index',
  components: {
    MaterialCardFlat,
    MaterialCard,
    Vue3EasyDataTable
  },
  data () {
    return {
      headers:[
        { text: "Name", value: "name" },
        { text: "Height (cm)", value: "height", sortable: true },
        { text: "Weight (kg)", value: "weight", sortable: true },
        { text: "Age", value: "age", sortable: true }
      ],
      items: [
        { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
        { "name": "James", "height": 180, "weight": 75, "age": 21 },
        { "name": "Jordan", "height": 181, "weight": 73, "age": 22 },
        { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
        { "name": "James", "height": 180, "weight": 75, "age": 21 },
        { "name": "Jordan", "height": 181, "weight": 73, "age": 22 },
        { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
        { "name": "James", "height": 180, "weight": 75, "age": 21 },
        { "name": "Jordan", "height": 181, "weight": 73, "age": 22 },
        { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
        { "name": "James", "height": 180, "weight": 75, "age": 21 },
        { "name": "Jordan", "height": 181, "weight": 73, "age": 22 },
        { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
        { "name": "James", "height": 180, "weight": 75, "age": 21 },
        { "name": "Jordan", "height": 181, "weight": 73, "age": 22 },
        { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
        { "name": "James", "height": 180, "weight": 75, "age": 21 },
        { "name": "Jordan", "height": 181, "weight": 73, "age": 22 },
        { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
        { "name": "James", "height": 180, "weight": 75, "age": 21 },
        { "name": "Jordan", "height": 181, "weight": 73, "age": 22 },
        { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
        { "name": "James", "height": 180, "weight": 75, "age": 21 },
        { "name": "Jordan", "height": 181, "weight": 73, "age": 22 },
        { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
        { "name": "James", "height": 180, "weight": 75, "age": 21 },
        { "name": "Jordan", "height": 181, "weight": 73, "age": 22 },
        { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
        { "name": "James", "height": 180, "weight": 75, "age": 21 },
        { "name": "Jordan", "height": 181, "weight": 73, "age": 22 },
        { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
        { "name": "James", "height": 180, "weight": 75, "age": 21 },
        { "name": "Jordan", "height": 181, "weight": 73, "age": 22 },
        { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
        { "name": "James", "height": 180, "weight": 75, "age": 21 },
        { "name": "Jordan", "height": 181, "weight": 73, "age": 22 }
      ],
      restaurantes: []
    }
  },
  created() {
    this.buscarListaDeRestaurantes();
  },
  methods: {
    async buscarListaDeRestaurantes() {
      const resultadoBusca = await restaurantesServices.index({});
      resultadoBusca.data.forEach((item) => {
        var restaurante = new Restaurante();
        restaurante.populate(item);
        this.restaurantes.push(restaurante);
      });
    }
  }
}
</script>