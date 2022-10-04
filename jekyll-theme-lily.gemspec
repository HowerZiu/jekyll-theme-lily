# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-lily"
  spec.version       = "1.3.2.2.11"
  spec.authors       = ["HowerZiu"]
  spec.email         = ["howerziu@yeah.net"]

  spec.summary       = "A fresh Jekyll theme."
  spec.homepage      = "https://github.com/HowerZiu/jekyll-theme-lily"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", ">= 3.5", "< 5.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"
end
