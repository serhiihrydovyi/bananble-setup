const CracoLessPlugin = import('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#ff1888', // primary color for all "components
              '@link-color': ' #ff3318', // link "color
              '@success-color': '#bc1ac4', // success state "color
              '@warning-color': '#faad14', // warning state "color
              '@error-color': '#f5222d', // error state "color
              '@font-size-base': '14px', // major text font "size
              '@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
              // '@text-color': 'rgba(0, 0, 0, 0.65)', // major text color
              '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
              '@disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
              '@border-radius-base': '2px', // major border radius
              '@border-color-base': '#d9d9d9', // major border color
              '@text-color': 'red',
              '@layout-body-background': ' #f0f2f5',
              '@layout-header-background': '#001529',
              '@layout-header-height': '64px',
              '@layout-header-padding': '0 50px',
              '@layout-header-color': '@text-color',
              '@layout-footer-padding': '24px 50px',
              '@layout-footer-background': '@layout-body-background',
              '@layout-sider-background': '@layout-header-background',
              '@layout-trigger-height': '48px',
              '@layout-trigger-background': '#002140',
              '@layout-trigger-color': '#fff',
              '@layout-zero-trigger-width': '36px',
              '@layout-zero-trigger-height': '42px',
              // Layout light theme
              '@layout-sider-background-light': '#fff',
              '@layout-trigger-background-light': '#fff',
              '@layout-trigger-color-light': '@text-color',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
