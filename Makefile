PORT ?= 8000

serve:
	@echo "Starting server at http://localhost:$(PORT)"
	@open http://localhost:$(PORT) &
	python3 -m http.server $(PORT)
