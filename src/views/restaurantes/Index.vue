<template>
    <div id="Restaurante">
      <v-container fluid class="dataTable" >
        <v-row>
          <v-col>
            <material-card-flat
                color="blue"
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
            <material-card-flat
                color="blue"
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
                color="blue"
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
      </v-container>
    </div>
</template>
<script>
import restaurantesServices from "../../services/restaurantesServices";
import Restaurante from "../../models/Restaurante";
import MaterialCardFlat from "../../components/material/CardFlat.vue";
import MaterialCard from "../../components/material/Card.vue";

export default {
  name: 'restaurante-index',
  components: {
    MaterialCardFlat,
    MaterialCard
  },
  data () {
    return {
      headers: [{
          text: 'Cód',
          align: 'start',
          sortable: false,
          value: 'id',
        }],
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