<template>
  <div>
    <Header />
    <main class="main">
      <Welcome id="about" />
      <div class="about__block">
        <div class="about__wrapper">
          <CardContent :data="aboutData">
            <div class="buttons__group">
              <Button color="blue" type="button">
                Read more
              </Button>
  
              <Button color="white" type="button" borderType="standard">
                Contact us
              </Button>
            </div>
          </CardContent>
        </div>
      </div>

      <div class="frameworks__block" id="frameworks">
        <h2 class="section__title">Frameworks</h2>
        <div class="frameworks__wrapper">
          <CardContent 
            v-for="item of frameworksData"
            :key="item.id"
            listMode="reverse-odd"
            :data="item" 
            descriptionSize="medium"
          >
            <div class="buttons__group">
              <Button color="blue" type="button">
                Submit
              </Button>
  
              <Button color="white" type="button" borderType="standard">
                Webinar
              </Button>
            </div>
          </CardContent>
        </div>
      </div>

      <div class="proposals__block">
        <CardContent 
          v-for="item of proposals"
          :data="item"
          :key="item.title"
          listMode="reverse"
          cardSize="small"
          descriptionSize="small"
        >
        <div class="button__position">
          <Button color="blue" type="button">
            {{ item.buttonText }}
          </Button>
        </div>
        </CardContent>
      </div>

      <div class="applications__block" id="applications" >
        <h2 class="section__title">Applications</h2>
        <ApplicationList :applicationsArray="applications"/>
      </div>

      <div class="form__block" id="contacts">
        <h2 class="section__title">Contact Us</h2>
        <Form />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Welcome from '../components/blocks/Welcome.vue';
import CardContent from '../components/blocks/CardContent.vue';
import ApplicationList from '../components/applications/ApplicationList.vue';
import Form from '../components/Form.vue';
import Footer from '../components/Footer.vue';
import Button from '../components/common/button/Button.vue';
import {
  aboutData,
  frameworksData,
  proposals,
  applications,
} from '../mockdata/data';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';


.about__block {
  margin: 0 auto;
  padding: 102px 20px;
  max-width: 1440px;
}

.about__wrapper {
  max-width: 1196px;
  margin: 0 auto;
}

.buttons__group {
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 23px;

  @include media-tablet {
    justify-content: space-between;
  }
}

.frameworks__block {
  margin: 0 auto;
  padding: 44px 0 61px 0;
  max-width: 1440px;
  background: #F5F7FA;
}

.frameworks__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 45px auto 0 auto;
  max-width: 1196px;
  gap: 45px 0;
  background: #F5F7FA;
}

.proposals__block {
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  background: #F5F7FA;

  @include media-tablet {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px 0;
  }
}

.applications__block {
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1440px;
  background: #F5F7FA;
}

.form__block {
  margin: 0 auto;
  padding: 0px 20px 60px 20px;
  max-width: 1440px;
  background-color: $color-white;
}
</style>