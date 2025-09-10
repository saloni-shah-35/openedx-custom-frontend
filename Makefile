# Minimal Makefile for Tutor MFE builds

.PHONY: install build pull_translations compile_translations

install:
	# Use npm, yarn, or pnpm as you prefer. Adjust accordingly.
	npm ci

build:
	npm run build

# Tutor calls this during the Docker build. No-op is fine if you don't use Atlas yet.
pull_translations:
	@echo "Skipping pull_translations (no translations configured)."

# Optional no-op to be safe if compile gets called
compile_translations:
	@echo "No translations to compile."
