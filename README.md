# <img width="152" alt="simple_logo_5_23_20" src="https://github.com/user-attachments/assets/a15f1a22-4c65-4c66-bd84-b033f22a9565" />


# Headless Wordpress & React CMS Portfolio Project

This repository contains the codebase for a portfolio site website, utilizing a headless wordpress configuration.

## Live Site

https://mattewest.com/

## Features

- **Headless React WordPress configuration:** Uses Headless WordPress
- **Interactive UI:** Built with React and Tailwind CSS, featuring dynamic gradient backgrounds.
- **3D Graphics:** Utilizes [Spline 3D](https://spline.design/) for interactive 3D graphics.
- **Real-time Data Fetching:** Utilizes [Apollo GraphQL](https://www.apollographql.com/) for efficient  data fetching.
- **Custom Audio Components:** Includes custom React audio components for enhanced media playback.

## Project Structure

- **/wp-content** Contains all theme, plugin, and upload files.

- **/themes/brads-boilerplate-theme-tailwind**: Custom theme files including `header.php`, `footer.php`, and other template parts.
  
- **/wp-includes & /wp-admin**  
  Core WordPress files. Do not modify these files, as they are maintained by WordPress.

- **master & upload test**:  
  - **master** may still be maintained if legacy code or older CMS requirements exist.
  - **upload test** is used for staging and testing updates before merging them into the main branch.

## Getting Started

1. **Development Environment:**  
   Set up your local development environment with a local server (e.g., Local by Flywheel, MAMP, or similar) and import the database if needed.

2. **Theme Configuration:**  
   The custom theme is located in `/wp-content/themes/brads-boilerplate-theme-tailwind`. Customize the header, footer, and other template parts as required.

3. **Upload & Updates:**  
   - Use the `upload test` branch for experimental changes before making the modifications available on production.
   - Merge the verified changes into the `master` branch for deployment.

4. **Installation**
  
## Customization

Modify the theme files, style sheets, and scripts within the `/wp-content` folder to meet your design and functionality requirements. Use WordPress hooks and filters to safely extend or override default behaviors. If you're extending multisite features, refer to the Site API documentation included within the WordPress core documentation.

## Acknowledgements

This project uses the [Brad's Boilerplate WordPress Theme](https://github.com/LearnWebCode/brads-boilerplate-wordpress) as a starting point. Special thanks to [LearnWebCode](https://github.com/LearnWebCode) for providing this excellent resource.

## License
