# jekyll-theme-lily

[![Gem Version](https://badge.fury.io/rb/jekyll-theme-lily.svg)](https://badge.fury.io/rb/jekyll-theme-lily) [![Gem](https://img.shields.io/gem/dt/jekyll-theme-lily.svg)](https://img.shields.io/gem/dt/jekyll-theme-lily.svg)

*Lily is a fresh Jekyll theme based on [Beercss](https://www.beercss.com/). You can [preview the theme to see what it looks like](https://howerziu.github.io/jekyll-theme-lily), or [directly use it](#usage).*


## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-lily"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-lily
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-lily

## Usage

To directly use the Lily theme:

1. Add the following to your site's `_config.yml`:

    ```yml
    remote_theme: HowerZiu/jekyll-theme-lily@1.9.2.3.0
    plugins:
    - jekyll-remote-theme # add this line to the plugins list if you already have one
    ```

2. Optionally, if you'd like to preview your site on your computer, add the following to your site's `Gemfile`:

    ```ruby
    gem "github-pages", group: :jekyll_plugins
    ```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/HowerZiu/jekyll-theme-lily. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-lily.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

