const _purple = '#2b222f'
const _white = '#f3f5f5'
const _orange = '#ffa924'
const _grey = '#839eaf'

export const palette = {
  data() {
    return {
      landingPageBackgroundColour: _purple,
      landingPageTextColour: _white,
      landingPageButtonColour: _orange,
      landingPageSubmitButtonColour: _grey
    }
  }
}

export const logoAssetLocation = {
  data() {
    return {
      zoombaLogoUrl: require('@/assets/ZoombaLogo.png'),
      zoombaLogoSloganUrl: require('@/assets/ZoombaSlogan.png')
    }
  }
}

const _facebookUrl = 'https://www.facebook.com/Zoomba-Game-108881370543869'
const _githubUrl = 'https://github.com/TryingOutSomething/Zoomba'
const _emailAddress = 'ahpeiq@gmail.com'

export const websiteUrls = {
  methods: {
    launchFaceBookSite() {
      window.open(_facebookUrl, '_blank')
    },

    launchGitHubSite() {
      window.open(_githubUrl, '_blank')
    },

    launchEmail() {
      window.location.href = `mailto:${_emailAddress}`
    }
  }
}
