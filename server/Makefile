.PHONY: test
test:
	pytest --cov=app

.PHONY: testcov
testcov:
	pytest --cov=app && (echo "building coverage html, view at './htmlcov/index.html'"; coverage html)


.PHONY: reset-database
reset-database:
	python -c "from app.management import prepare_database; prepare_database(True)"
