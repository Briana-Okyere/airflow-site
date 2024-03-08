Search.setIndex({"docnames": ["_api/airflow/providers/trino/datasets/index", "_api/airflow/providers/trino/datasets/trino/index", "_api/airflow/providers/trino/hooks/index", "_api/airflow/providers/trino/hooks/trino/index", "_api/airflow/providers/trino/index", "_api/airflow/providers/trino/operators/index", "_api/airflow/providers/trino/operators/trino/index", "_api/airflow/providers/trino/transfers/gcs_to_trino/index", "_api/airflow/providers/trino/transfers/index", "_api/tests/system/providers/trino/example_gcs_to_trino/index", "_api/tests/system/providers/trino/example_trino/index", "_api/tests/system/providers/trino/index", "changelog", "commits", "connections", "index", "installing-providers-from-sources", "operators/index", "operators/transfer/gcs_to_trino", "operators/trino", "security"], "filenames": ["_api/airflow/providers/trino/datasets/index.rst", "_api/airflow/providers/trino/datasets/trino/index.rst", "_api/airflow/providers/trino/hooks/index.rst", "_api/airflow/providers/trino/hooks/trino/index.rst", "_api/airflow/providers/trino/index.rst", "_api/airflow/providers/trino/operators/index.rst", "_api/airflow/providers/trino/operators/trino/index.rst", "_api/airflow/providers/trino/transfers/gcs_to_trino/index.rst", "_api/airflow/providers/trino/transfers/index.rst", "_api/tests/system/providers/trino/example_gcs_to_trino/index.rst", "_api/tests/system/providers/trino/example_trino/index.rst", "_api/tests/system/providers/trino/index.rst", "changelog.rst", "commits.rst", "connections.rst", "index.rst", "installing-providers-from-sources.rst", "operators/index.rst", "operators/transfer/gcs_to_trino.rst", "operators/trino.rst", "security.rst"], "titles": ["<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.trino.datasets</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.trino.datasets.trino</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.trino.hooks</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.trino.hooks.trino</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.trino</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.trino.operators</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.trino.operators.trino</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.trino.transfers.gcs_to_trino</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.trino.transfers</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">tests.system.providers.trino.example_gcs_to_trino</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">tests.system.providers.trino.example_trino</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">tests.system.providers.trino</span></code>", "Changelog", "Package apache-airflow-providers-trino", "Apache Trino Connection", "<code class=\"docutils literal notranslate\"><span class=\"pre\">apache-airflow-providers-trino</span></code>", "Installing from sources", "Trino operator", "Google Cloud Storage to Trino Transfer Operator", "TrinoOperator", "Releasing security patches"], "terms": {"5": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20], "6": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20], "3": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20], "2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20], "9": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20], "dev0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "an": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "experiment": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "featur": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20], "sanitize_uri": 1, "uri": [1, 12, 13], "sourc": [1, 3, 4, 6, 7, 9, 10, 14, 18, 19], "t": 3, "generate_trino_client_info": 3, "return": 3, "json": [3, 7, 14, 18], "string": [3, 6, 7, 13, 18, 19], "dag_id": [3, 9, 19], "task_id": [3, 18, 19], "execution_d": 3, "try_numb": 3, "except": [3, 12, 13, 20], "trinoexcept": 3, "base": [3, 6, 7], "trinohook": [3, 12, 13], "arg": 3, "kwarg": [3, 6, 7], "common": [3, 6, 12, 13, 15], "sql": [3, 6, 12, 13, 14, 15, 18, 19], "dbapihook": [3, 12, 13], "interact": [3, 7, 18], "through": 3, "packag": [3, 12], "ph": 3, "select": [3, 16, 19], "count": 3, "1": [3, 7, 14, 15, 19], "AS": 3, "num": 3, "from": [3, 7, 12, 13, 15, 19, 20], "static_babynam": 3, "get_record": [3, 12, 13], "340698": 3, "conn_name_attr": 3, "trino_conn_id": [3, 6, 7, 14, 19], "default_conn_nam": 3, "trino_default": [3, 6, 7, 14], "conn_typ": 3, "hook_nam": 3, "query_id": 3, "get_conn": 3, "connect": [3, 6, 7, 12, 13, 19], "object": [3, 7], "get_isolation_level": 3, "isol": 3, "level": [3, 13], "paramet": [3, 6, 7, 12, 13, 14, 19], "none": [3, 7, 14, 16], "execut": [3, 6, 7, 19], "set": [3, 6, 7, 12, 13, 14], "record": 3, "str": [3, 6, 7], "list": [3, 6, 7, 13, 14, 18, 19], "statement": [3, 6], "iter": [3, 7], "map": 3, "ani": [3, 6, 7, 16, 19], "The": [3, 6, 7, 14, 15, 16, 20], "render": [3, 6, 7], "queri": [3, 6, 12, 13, 14, 18, 19], "get_first": [3, 12, 13], "first": [3, 7, 12], "result": [3, 6], "row": 3, "get_pandas_df": [3, 12], "panda": [3, 12, 13, 15], "datafram": 3, "option": [3, 6, 7, 14, 18], "pass": [3, 12, 13, 14, 19], "io": 3, "read_sql": 3, "method": [3, 6, 12, 13], "insert_row": 3, "tabl": [3, 7, 10, 19], "target_field": 3, "commit_everi": 3, "replac": [3, 13], "fals": [3, 19], "insert": [3, 19], "tupl": [3, 18], "gener": 3, "wai": 3, "name": [3, 7, 13, 14], "target": [3, 6], "column": [3, 7, 18], "fill": [3, 7], "int": 3, "maximum": 3, "number": [3, 13], "one": [3, 14, 16], "transact": 3, "all": [3, 12, 13, 14, 15, 18, 20], "bool": 3, "whether": 3, "instead": [3, 12], "get_openlineage_database_info": 3, "specif": [3, 6, 13], "inform": [3, 6, 13, 20], "openlineag": [3, 12, 13, 15], "get_openlineage_database_dialect": 3, "_": 3, "dialect": 3, "get_openlineage_default_schema": 3, "default": [3, 20], "schema": [3, 7, 10, 18, 19], "dataset": [4, 12, 13], "hook": [4, 12, 13, 14], "oper": [4, 7, 12, 13], "transfer": 4, "gcs_to_trino": [4, 8], "__version__": [4, 13], "contain": [6, 7, 14, 16], "trinooper": [6, 10, 12, 13, 17], "sqlexecutequeryoper": [6, 12, 13], "code": [6, 12, 13, 16], "us": [6, 7, 9, 10, 12, 13, 14, 15, 16, 18, 20], "engin": [6, 14, 18, 19], "deprec": [6, 12, 13], "pleas": [6, 16], "For": [6, 13, 15, 16], "more": [6, 7, 12, 13, 14], "how": [6, 16], "take": [6, 14], "look": 6, "guid": [6, 16], "singl": [6, 18], "refer": [6, 7, 13], "templat": [6, 7, 13], "file": [6, 7, 12, 13, 14, 16, 18], "id": [6, 7, 16], "config": 6, "environ": 6, "autocommit": 6, "what": 6, "": [6, 12, 13, 16], "befor": 6, "handler": [6, 19], "which": [6, 7, 12, 13, 14, 20], "call": 6, "each": 6, "template_field": [6, 7], "sequenc": [6, 7], "template_fields_render": 6, "template_ext": 6, "ui_color": 6, "eded": 6, "on_kil": [6, 12, 13], "overrid": [6, 12, 13, 19], "clean": 6, "up": [6, 13], "subprocess": 6, "when": [6, 7, 14, 15, 20], "task": [6, 12, 13], "instanc": [6, 19], "get": [6, 7, 16, 20], "kill": [6, 12, 13], "thread": 6, "multiprocess": 6, "within": 6, "need": [6, 14, 15, 19], "leav": 6, "ghost": 6, "process": 6, "behind": 6, "googl": [7, 15], "cloud": 7, "storag": 7, "gcstotrinooper": [7, 9, 12, 13, 18], "source_bucket": [7, 18], "source_object": [7, 18], "trino_t": [7, 9, 18], "gcp_conn_id": 7, "google_cloud_default": 7, "schema_field": 7, "schema_object": 7, "impersonation_chain": [7, 12], "model": [7, 19, 20], "baseoper": 7, "load": 7, "csv": 7, "assumpt": 7, "should": [7, 14, 16, 20], "have": [7, 12, 18, 20], "header": [7, 13, 18], "requisit": 7, "alreadi": [7, 16], "creat": [7, 16, 19], "separ": [7, 14, 20], "can": [7, 12, 14, 15, 16, 18, 19, 20], "gc": [7, 12], "bucket": [7, 9, 18], "includ": [7, 13, 15, 18, 20], "path": [7, 14, 18], "upload": 7, "data": [7, 13, 14, 18], "destin": 7, "servic": [7, 18], "If": [7, 12, 14, 16], "field": 7, "account": 7, "imperson": [7, 12, 13], "short": 7, "term": 7, "credenti": 7, "chain": 7, "requir": [7, 12, 14, 20], "access_token": 7, "last": 7, "request": 7, "must": 7, "grant": 7, "origin": [7, 16], "token": [7, 12, 13, 14], "creator": 7, "iam": 7, "role": 7, "ident": 7, "directli": 7, "preced": [7, 14], "context": 7, "deriv": 7, "same": [7, 18], "dictionari": [7, 14], "jinja": 7, "get_template_context": 7, "exampl": [9, 10, 13, 14, 15, 16, 19], "dag": [9, 10, 13, 19], "path_to_fil": [9, 18], "env_id": 9, "gcs_csv_to_trino_t": [9, 18], "test_run": [9, 10], "hive": [10, 18], "citi": [10, 19], "table1": [10, 19], "city1": 10, "table2": [10, 19], "city2": 10, "trino_create_schema": [10, 19], "example_gcs_to_trino": [11, 18], "example_trino": [11, 19], "apach": [12, 16], "airflow": [12, 16, 20], "provid": [12, 16, 18, 19, 20], "trino": [12, 16, 19], "limit": [12, 13], "37748": [12, 13], "implement": [12, 13], "aip": [12, 13], "60": [12, 13], "format": [12, 13], "37005": [12, 13], "feat": [12, 13], "switch": [12, 13], "class": [12, 13, 15], "function": [12, 13], "decor": [12, 13], "36876": [12, 13], "min": [12, 13], "depend": [12, 13, 20], "36698": [12, 13], "make": [12, 13], "placehold": [12, 13], "odbc": [12, 13], "configur": [12, 13], "ui": [12, 13], "36000": [12, 13], "releas": [12, 13, 15], "onli": [12, 20], "avail": [12, 16], "explain": 12, "support": [12, 13, 14, 15], "polici": [12, 20], "add": [12, 13], "timezon": [12, 13, 14], "35963": [12, 13], "bump": [12, 13], "minimum": [12, 13, 15], "version": [12, 13, 15, 16, 20], "36017": [12, 13], "remov": [12, 13, 16], "backcompat": [12, 13], "inherit": [12, 13], "35754": [12, 13], "34728": [12, 13], "airflowexcept": [12, 13], "34511": [12, 13], "improv": [12, 13], "modul": [12, 13], "import": [12, 13, 16], "some": [12, 13], "them": [12, 13, 15], "type": [12, 13, 14], "check": [12, 13, 16], "block": [12, 13], "33754": [12, 13], "32910": [12, 13], "consolid": [12, 13], "usag": [12, 13, 19], "33480": [12, 13], "accur": [12, 13], "run": [12, 13, 16, 18, 19], "31846": [12, 13], "info": [12, 13], "docstr": [12, 13], "32536": [12, 13], "abil": [12, 13], "read": [12, 13], "jwt": [12, 13, 14], "31950": [12, 13], "drop": [12, 13, 16], "python": [12, 13, 14, 15, 16], "7": [12, 13], "note": [12, 13, 14], "about": [12, 13, 16, 20], "32015": [12, 13], "30917": [12, 13], "In": 12, "param": [12, 13, 19], "delegate_to": [12, 13], "gcstoprestooper": 12, "achiev": 12, "util": 12, "gcp": [12, 13], "30748": [12, 13], "updat": [12, 13], "doc": [12, 13], "29088": [12, 13], "outdat": [12, 13], "compat": [12, 13], "28507": [12, 13], "_serialize_cel": [12, 13], "prestohook": [12, 13], "27724": [12, 13], "27888": [12, 13], "move": [12, 13], "27196": [12, 13], "non": [12, 13], "work": [12, 13], "dml": [12, 13], "27168": [12, 13], "25717": [12, 13], "certificateauthent": [12, 13], "26246": [12, 13], "lower": [12, 13], "bound": [12, 13], "25789": [12, 13], "sqlitehook": [12, 13], "25939": [12, 13], "hql": [12, 13], "ha": [12, 18], "been": 12, "synchron": [12, 13], "api": [12, 13], "25299": [12, 13], "unifi": [12, 13], "23971": [12, 13], "24836": [12, 13], "test_connect": [12, 13], "24583": [12, 13], "24559": [12, 13], "24415": [12, 13], "authent": [12, 13, 14], "via": [12, 13, 14, 15, 16], "23116": [12, 13], "presto": [12, 13, 18], "23061": [12, 13], "x": [12, 13], "client": [12, 13, 14], "22535": [12, 13], "mistakenli": 12, "ad": 12, "install_requir": 12, "22382": 12, "trove": 12, "classifi": [12, 13], "pypi": [12, 13, 15, 20], "framework": 12, "21704": [12, 13], "10": [12, 13], "properli": [12, 13], "handl": [12, 13], "verifi": [12, 13, 15], "18791": [12, 13], "optimis": 12, "auto": 12, "appli": [12, 13], "apply_default": 12, "15667": 12, "due": 12, "your": [12, 18, 19], "you": [12, 15, 16, 18, 20], "want": [12, 16, 20], "instal": [12, 20], "upgrad": [12, 13, 20], "least": 12, "otherwis": 12, "automat": 12, "manual": 12, "db": 12, "complet": 12, "migrat": [12, 13], "initi": 12, "detail": [13, 16], "commit": 13, "chang": [13, 20], "high": 13, "changelog": 13, "see": [13, 15], "latest": [13, 20], "2024": 13, "02": 13, "27": 13, "subject": 13, "9e4bdc9e45": 13, "b52b227c04": 13, "26": 13, "5a0be392e6": 13, "16": 13, "comment": 13, "manag": [13, 16], "37488": 13, "e346253760": 13, "15": 13, "fix": [13, 20], "remain": 13, "d401": 13, "37434": 13, "12": [13, 16], "bfb054e9e8": 13, "prepar": [13, 20], "1st": 13, "wave": 13, "februari": 13, "37326": 13, "dec2662190": 13, "01": 13, "30": 13, "cead3da4a6": 13, "rc2": 13, "2nd": 13, "round": 13, "jan": 13, "37019": 13, "2b4da0101f": 13, "22": 13, "januari": 13, "36945": 13, "ecb2c9f24d": 13, "09": 13, "f7b663d9af": 13, "07": 13, "mypi": 13, "full": 13, "ci": 13, "36638": 13, "19ebcac239": 13, "36640": 13, "6937ae7647": 13, "2023": 13, "speed": 13, "autocomplet": 13, "breez": 13, "simplifi": 13, "state": 13, "36499": 13, "23": 13, "b15d5578da": 13, "re": 13, "decemb": 13, "36380": 13, "f5883d6e7b": 13, "36373": 13, "f84eb2ab6f": 13, "21": 13, "08": 13, "999b70178a": 13, "36112": 13, "d0918d77ee": 13, "1c6bbe2841": 13, "11": [13, 16], "24": 13, "0b23d5601c": 13, "novemb": 13, "35836": 13, "2a469b3713": 13, "99534e47f3": 13, "19": 13, "reproduc": 13, "build": [13, 16], "35693": 13, "99df205f42": 13, "reappli": 13, "document": 13, "35686": 13, "1b059c57d6": 13, "35537": 13, "11bdfe4c12": 13, "around": 13, "issu": 13, "35494": 13, "63cc915cd3": 13, "31": 13, "black": 13, "ruff": 13, "formatt": 13, "35287": 13, "d1c58d86de": 13, "28": 13, "3rd": 13, "octob": 13, "35233": 13, "3592ff4046": 13, "35187": 13, "dd7ba3cae1": 13, "pre": [13, 18], "292": 13, "35053": 13, "13": 13, "e9987d5059": 13, "34916": 13, "0c8e30e43b": 13, "05": 13, "659d94f0ae": 13, "21990ed894": 13, "34201": 13, "9d8c77e447": 13, "c077d19060": 13, "aug": 13, "33730": 13, "626d3daa9b": 13, "8e88eb8fa7": 13, "17": 13, "29": 13, "d06b7af69a": 13, "juli": 13, "32875": 13, "60c49ab2df": 13, "e01323635a": 13, "21e8f878a3": 13, "06": 13, "d205": 13, "snowflak": 13, "zendesk": 13, "inclus": 13, "32359": 13, "225e3041d2": 13, "32381": 13, "3878fe6fab": 13, "spuriou": 13, "32373": 13, "cb4927a018": 13, "32298": 13, "09d4718d3a": 13, "readm": 13, "structur": 13, "32125": 13, "371833e076": 13, "20": 13, "79bcc2e668": 13, "rc1": 13, "june": 13, "32001": 13, "8b146152d6": 13, "a59076eae": 13, "d400": 13, "pydocstyl": 13, "31427": 13, "45548b9451": 13, "mai": 13, "31416": 13, "abea189022": 13, "18": 13, "31393": 13, "f5aed58d9f": 13, "circular": 13, "error": 13, "caus": 13, "31379": 13, "d9ff55cf6d": 13, "31252": 13, "0a30706aa7": 13, "03": 13, "airflowproviderdeprecationwarn": 13, "30975": 13, "eef5bc7f16": 13, "autom": 13, "30994": 13, "a7eb32a5b2": 13, "04": 13, "e46ce78b66": 13, "adhoc": 13, "30787": 13, "fbc1382514": 13, "d23a3bbed8": 13, "mechan": [13, 14], "suspend": 13, "30422": 13, "ce6ae2457": 13, "feb": 13, "29379": 13, "3374fdfcbd": 13, "5246c009c5": 13, "28651": 13, "38e40c6dc4": 13, "2022": [13, 19], "25bdbc8e67": 13, "rc3": 13, "27937": 13, "2e20e9f7eb": 13, "follow": [13, 14, 16, 19, 20], "relas": 13, "27774": 13, "80c327bd3b": 13, "e56adc8e41": 13, "12c3c39d1a": 13, "27613": 13, "a3bfa25e67": 13, "allow": [13, 14, 18], "tag": [13, 14, 19], "27213": 13, "5c37b503f1": 13, "26944": 13, "09c045f081": 13, "78b8ea2f22": 13, "2a34dc9e84": 13, "enabl": [13, 14], "normal": 13, "27205": 13, "17b97e755a": 13, "session": [13, 14], "properti": 13, "27095": 13, "ecd4d6654f": 13, "f8db64c35c": 13, "septemb": 13, "26731": 13, "b2766d0515": 13, "06acf40a43": 13, "pep": 13, "563": 13, "postpon": 13, "evalu": 13, "annot": 13, "core": 13, "26289": 13, "25d0baa4e": 13, "bug": [13, 20], "out": [13, 14, 20], "band": [13, 20], "26109": 13, "a74d934991": 13, "ca9229b6f": 13, "e5ac6c7cfb": 13, "new": [13, 20], "august": 13, "25618": 13, "5d4abbd58c": 13, "df00436569": 13, "d2459a241b": 13, "25030": 13, "46bbfdade0": 13, "0de31bd73a": 13, "insid": 13, "folder": [13, 16], "24672": 13, "510a6bab45": 13, "yaml": 13, "24702": 13, "122d2f69bb": 13, "4f4f37c855": 13, "865406cbab": 13, "dcdcf3a2b8": 13, "24307": 13, "717a7588bc": 13, "descript": 13, "doubl": 13, "24292": 13, "aeabe994b3": 13, "24231": 13, "027b707d21": 13, "explanatori": 13, "contributor": 13, "24229": 13, "7489962e75": 13, "47": 13, "design": [13, 14], "24118": 13, "75c60923e0": 13, "23631": 13, "ccb5ce934c": 13, "8b6b0848a3": 13, "brees": 13, "pull": 13, "imag": 13, "23104": 13, "5164cdbe98": 13, "6933022e94": 13, "main": [13, 16, 20], "22884": 13, "56ab82ed7a": 13, "mid": 13, "april": 13, "22819": 13, "0c30564992": 13, "d7dbfb7e26": 13, "bugfix": [13, 20], "22383": 13, "14": 13, "16adc035b1": 13, "march": 13, "22226": 13, "f5b96315fe": 13, "22056": 13, "942f8fd657": 13, "2807193594": 13, "21630": 13, "1884f2227d": 13, "21479": 13, "d94fa37830": 13, "delai": 13, "21439": 13, "6c3a67d4fc": 13, "2021": [13, 16], "21257": 13, "602abe8394": 13, "line": 13, "now": 13, "sphinx": 13, "autoapi": 13, "typehint": 13, "20951": 13, "f77417eb0d": 13, "k8": 13, "20614": 13, "97496ba2b4": 13, "20523": 13, "dad2f8103b": 13, "20190": 13, "d9567eb106": 13, "19321": 13, "6bc0f87755": 13, "0a68588479": 13, "17890": 13, "be75dcd39c": 13, "meta": 13, "76ed2a49c6": 13, "lazili": 13, "individu": 13, "17682": 13, "87f408b1e7": 13, "17116": 13, "b916b75079": 13, "17015": 13, "866a601b76": 13, "pylint": 13, "our": 13, "toolchain": 13, "16682": 13, "bbc627a3da": 13, "16501": 13, "cbf8001d76": 13, "after": 13, "buggfix": 13, "16464": 13, "1fba5402bb": 13, "16405": 13, "9c94b72d44": 13, "16294": 13, "eae22cec9c": 13, "memori": 13, "footprint": 13, "test": [13, 18, 19, 20], "15187": 13, "distribut": [14, 16, 18], "larg": [14, 18], "over": 14, "heterogen": 14, "valu": [14, 19], "multipl": [14, 18, 19], "ensur": 14, "user": [14, 16], "system": [14, 18, 19], "ar": [14, 15, 16, 20], "auth": 14, "host": 14, "local": [14, 16], "yarn": 14, "url": 14, "port": 14, "specifi": [14, 15], "case": [14, 20], "login": 14, "effect": 14, "password": 14, "basic": 14, "differ": [14, 16], "extra": [14, 15], "standard": 14, "cert": 14, "kerbero": 14, "impersonate_as_own": 14, "boolean": 14, "airflow_ctx_dag_own": 14, "jwt__token": 14, "given": 14, "jwt__file": 14, "locat": [14, 19], "disk": 14, "certs__client_cert_path": 14, "certs__client_key_path": 14, "certif": [14, 16], "kei": [14, 16], "kerberos__service_nam": 14, "kerberos__config": 14, "kerberos__mutual_authent": 14, "kerberos__force_preempt": 14, "kerberos__hostname_overrid": 14, "kerberos__sanitize_mutual_error_respons": 14, "kerberos__princip": 14, "kerberos__deleg": 14, "kerberos__ca_bundl": 14, "These": 14, "session_properti": 14, "scale_writ": 14, "true": 14, "task_writer_count": 14, "client_tag": 14, "comma": 14, "sale": 14, "cluster1": 14, "time": 14, "zone": 14, "explicitli": 14, "iana": 14, "asia": 14, "jerusalem": 14, "both": 14, "top": [15, 16], "exist": [15, 18, 19], "pip": [15, 16], "below": [15, 16], "318": 15, "those": [15, 16], "might": [15, 20], "order": 15, "checksum": [15, 16], "signatur": [15, 16], "site": 15, "sdist": [15, 16], "asc": [15, 16], "sha512": [15, 16], "wheel": 15, "page": 16, "describ": 16, "download": 16, "offici": 16, "also": 16, "most": 16, "choos": 16, "down": 16, "left": 16, "whl": 16, "softwar": 16, "foundat": 16, "link": 16, "abov": 16, "pgp": 16, "It": 16, "essenti": 16, "sha": 16, "gpg": 16, "well": 16, "relev": 16, "recommend": 16, "directori": 16, "mirror": 16, "pgpk": 16, "ka": 16, "To": [16, 18], "binari": 16, "pgpv": 16, "tar": 16, "gz": 16, "made": 16, "sat": 16, "sep": 16, "49": 16, "54": 16, "bst": 16, "rsa": 16, "cde15c6e4d3a8ec4ecf4ba4b6674e08ad7de406f": 16, "issuer": 16, "kaxilnaik": 16, "org": 16, "good": [16, 20], "kaxil": 16, "naik": 16, "unknown": 16, "aka": 16, "gmail": 16, "com": 16, "warn": 16, "certifi": 16, "trust": 16, "There": 16, "indic": 16, "belong": 16, "owner": 16, "primari": 16, "fingerprint": 16, "cde1": 16, "5c6e": 16, "4d3a": 16, "8ec4": 16, "ecf4": 16, "ba4b": 16, "6674": 16, "e08a": 16, "d7de": 16, "406f": 16, "correct": [16, 19], "do": 16, "worri": 16, "self": 16, "sign": 16, "why": 16, "By": 16, "server": 16, "previou": 16, "step": 16, "know": 16, "valid": 16, "sum": 16, "shasum": 16, "512": 16, "diff": 16, "match": [16, 19], "script": 16, "bin": 16, "bash": 16, "package_vers": 16, "package_nam": 16, "provider_download_dir": 16, "mktemp": 16, "d": 16, "dep": 16, "dest": 16, "curl": 16, "http": 16, "apache_airflow_providers_trino": 16, "py3": 16, "l": 16, "o": 16, "echo": 16, "la": 16, "onc": [16, 19], "instruct": [16, 20], "chapter": 16, "temporari": 16, "store": 18, "variou": 18, "applic": 18, "open": 18, "fast": 18, "analyt": 18, "against": 18, "size": 18, "rang": 18, "gigabyt": 18, "petabyt": 18, "where": [18, 19, 20], "live": 18, "cassandra": 18, "relat": 18, "databas": 18, "even": 18, "proprietari": 18, "A": 18, "combin": 18, "across": 18, "entir": 18, "organ": 18, "assum": 18, "doe": 18, "correspond": 18, "py": [18, 19], "command": 19, "argument": 19, "schedul": 19, "start_dat": 19, "datetim": 19, "catchup": 19, "f": 19, "IF": 19, "NOT": 19, "WITH": 19, "s3": 19, "irisbkt": 19, "trino_create_t": 19, "cityid": 19, "bigint": 19, "citynam": 19, "varchar": 19, "trino_insert": 19, "INTO": 19, "san": 19, "francisco": 19, "trino_multiple_queri": 19, "jose": 19, "diego": 19, "trino_templated_queri": 19, "trino_parameterized_queri": 19, "syntact": 19, "either": 19, "independ": 20, "itself": 20, "vulner": 20, "publish": 20, "found": 20, "we": 20, "develop": 20, "alwai": 20, "done": 20, "branch": 20, "next": 20, "strict": 20, "semver": 20, "scope": 20, "major": 20, "break": 20, "minor": 20, "patchlevel": 20, "receiv": 20, "so": 20, "rule": 20, "critic": 20, "reason": 20, "stakehold": 20, "decid": 20, "cherri": 20, "pick": 20, "older": 20, "mix": 20, "govern": 20, "interest": 20, "parti": 20}, "objects": {"airflow.providers": [[4, 0, 0, "-", "trino"]], "airflow.providers.trino": [[4, 1, 1, "", "__version__"], [0, 0, 0, "-", "datasets"], [2, 0, 0, "-", "hooks"], [5, 0, 0, "-", "operators"], [8, 0, 0, "-", "transfers"]], "airflow.providers.trino.datasets": [[1, 0, 0, "-", "trino"]], "airflow.providers.trino.datasets.trino": [[1, 2, 1, "", "sanitize_uri"]], "airflow.providers.trino.hooks": [[3, 0, 0, "-", "trino"]], "airflow.providers.trino.hooks.trino": [[3, 1, 1, "", "T"], [3, 3, 1, "", "TrinoException"], [3, 4, 1, "", "TrinoHook"], [3, 2, 1, "", "generate_trino_client_info"]], "airflow.providers.trino.hooks.trino.TrinoHook": [[3, 5, 1, "", "conn_name_attr"], [3, 5, 1, "", "conn_type"], [3, 5, 1, "", "default_conn_name"], [3, 6, 1, "", "get_conn"], [3, 6, 1, "", "get_first"], [3, 6, 1, "", "get_isolation_level"], [3, 6, 1, "", "get_openlineage_database_dialect"], [3, 6, 1, "", "get_openlineage_database_info"], [3, 6, 1, "", "get_openlineage_default_schema"], [3, 6, 1, "", "get_pandas_df"], [3, 6, 1, "", "get_records"], [3, 5, 1, "", "hook_name"], [3, 6, 1, "", "insert_rows"], [3, 5, 1, "", "query_id"]], "airflow.providers.trino.operators": [[6, 0, 0, "-", "trino"]], "airflow.providers.trino.operators.trino": [[6, 4, 1, "", "TrinoOperator"]], "airflow.providers.trino.operators.trino.TrinoOperator": [[6, 6, 1, "", "on_kill"], [6, 5, 1, "", "template_ext"], [6, 5, 1, "", "template_fields"], [6, 5, 1, "", "template_fields_renderers"], [6, 5, 1, "", "ui_color"]], "airflow.providers.trino.transfers": [[7, 0, 0, "-", "gcs_to_trino"]], "airflow.providers.trino.transfers.gcs_to_trino": [[7, 4, 1, "", "GCSToTrinoOperator"]], "airflow.providers.trino.transfers.gcs_to_trino.GCSToTrinoOperator": [[7, 6, 1, "", "execute"], [7, 5, 1, "", "template_fields"]], "tests.system.providers": [[11, 0, 0, "-", "trino"]], "tests.system.providers.trino": [[9, 0, 0, "-", "example_gcs_to_trino"], [10, 0, 0, "-", "example_trino"]], "tests.system.providers.trino.example_gcs_to_trino": [[9, 1, 1, "", "BUCKET"], [9, 1, 1, "", "DAG_ID"], [9, 1, 1, "", "ENV_ID"], [9, 1, 1, "", "PATH_TO_FILE"], [9, 1, 1, "", "TRINO_TABLE"], [9, 1, 1, "", "gcs_csv_to_trino_table"], [9, 1, 1, "", "test_run"]], "tests.system.providers.trino.example_trino": [[10, 1, 1, "", "SCHEMA"], [10, 1, 1, "", "TABLE"], [10, 1, 1, "", "TABLE1"], [10, 1, 1, "", "TABLE2"], [10, 1, 1, "", "test_run"], [10, 1, 1, "", "trino_create_schema"]]}, "objtypes": {"0": "py:module", "1": "py:data", "2": "py:function", "3": "py:exception", "4": "py:class", "5": "py:attribute", "6": "py:method"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "data", "Python data"], "2": ["py", "function", "Python function"], "3": ["py", "exception", "Python exception"], "4": ["py", "class", "Python class"], "5": ["py", "attribute", "Python attribute"], "6": ["py", "method", "Python method"]}, "titleterms": {"airflow": [0, 1, 2, 3, 4, 5, 6, 7, 8, 13, 15], "provid": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15], "trino": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18], "dataset": [0, 1], "submodul": [0, 2, 5, 8, 11], "modul": [1, 3, 6, 7, 9, 10], "content": [1, 3, 4, 6, 7, 9, 10], "function": [1, 3], "hook": [2, 3], "class": [3, 6, 7], "attribut": 3, "subpackag": 4, "packag": [4, 13, 15, 16], "oper": [5, 6, 17, 18, 19], "transfer": [7, 8, 18], "gcs_to_trino": 7, "test": [9, 10, 11], "system": [9, 10, 11], "example_gcs_to_trino": 9, "example_trino": 10, "changelog": 12, "5": [12, 13], "6": [12, 13], "3": [12, 13], "misc": 12, "2": [12, 13], "1": [12, 13], "0": [12, 13], "featur": 12, "4": [12, 13], "break": 12, "chang": 12, "bug": 12, "fix": 12, "apach": [13, 14, 15], "connect": 14, "default": 14, "id": 14, "configur": 14, "instal": [15, 16], "requir": 15, "cross": 15, "depend": 15, "download": 15, "offici": 15, "from": [16, 18], "sourc": 16, "releas": [16, 20], "integr": 16, "verifi": 16, "pypi": 16, "googl": 18, "cloud": 18, "storag": 18, "load": 18, "csv": 18, "gc": 18, "tabl": 18, "trinooper": 19, "us": 19, "secur": 20, "patch": 20}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"airflow.providers.trino.datasets": [[0, "module-airflow.providers.trino.datasets"]], "Submodules": [[0, "submodules"], [2, "submodules"], [5, "submodules"], [8, "submodules"], [11, "submodules"]], "airflow.providers.trino.datasets.trino": [[1, "module-airflow.providers.trino.datasets.trino"]], "Module Contents": [[1, "module-contents"], [3, "module-contents"], [6, "module-contents"], [7, "module-contents"], [9, "module-contents"], [10, "module-contents"]], "Functions": [[1, "functions"], [3, "functions"]], "airflow.providers.trino.hooks": [[2, "module-airflow.providers.trino.hooks"]], "airflow.providers.trino.hooks.trino": [[3, "module-airflow.providers.trino.hooks.trino"]], "Classes": [[3, "classes"], [6, "classes"], [7, "classes"]], "Attributes": [[3, "attributes"]], "airflow.providers.trino": [[4, "module-airflow.providers.trino"]], "Subpackages": [[4, "subpackages"]], "Package Contents": [[4, "package-contents"]], "airflow.providers.trino.operators": [[5, "module-airflow.providers.trino.operators"]], "airflow.providers.trino.operators.trino": [[6, "module-airflow.providers.trino.operators.trino"]], "airflow.providers.trino.transfers.gcs_to_trino": [[7, "module-airflow.providers.trino.transfers.gcs_to_trino"]], "airflow.providers.trino.transfers": [[8, "module-airflow.providers.trino.transfers"]], "tests.system.providers.trino.example_gcs_to_trino": [[9, "module-tests.system.providers.trino.example_gcs_to_trino"]], "tests.system.providers.trino.example_trino": [[10, "module-tests.system.providers.trino.example_trino"]], "tests.system.providers.trino": [[11, "module-tests.system.providers.trino"]], "Changelog": [[12, "changelog"]], "5.6.3": [[12, "id1"], [13, "id1"]], "Misc": [[12, "misc"], [12, "id3"], [12, "id5"], [12, "id9"], [12, "id11"], [12, "id14"], [12, "id16"], [12, "id19"], [12, "id21"], [12, "id25"], [12, "id28"], [12, "id31"], [12, "id33"], [12, "id38"], [12, "id61"], [12, "id64"], [12, "id68"]], "5.6.2": [[12, "id2"], [13, "id2"]], "5.6.1": [[12, "id4"], [13, "id3"]], "5.6.0": [[12, "id6"], [13, "id4"]], "Features": [[12, "features"], [12, "id8"], [12, "id18"], [12, "id23"], [12, "id35"], [12, "id39"], [12, "id41"], [12, "id43"], [12, "id47"], [12, "id49"], [12, "id54"], [12, "id57"], [12, "id63"]], "5.5.0": [[12, "id7"], [13, "id5"]], "5.4.1": [[12, "id10"], [13, "id6"]], "5.4.0": [[12, "id12"], [13, "id7"]], "5.3.1": [[12, "id15"], [13, "id8"]], "5.3.0": [[12, "id17"], [13, "id9"]], "5.2.1": [[12, "id20"], [13, "id10"]], "5.2.0": [[12, "id22"], [13, "id11"]], "5.1.1": [[12, "id24"], [13, "id12"]], "5.1.0": [[12, "id26"], [13, "id13"]], "5.0.0": [[12, "id29"], [13, "id14"]], "Breaking changes": [[12, "breaking-changes"], [12, "id46"], [12, "id51"], [12, "id70"]], "4.3.2": [[12, "id30"], [13, "id15"]], "4.3.1": [[12, "id32"], [13, "id16"]], "4.3.0": [[12, "id34"], [13, "id17"]], "Bug Fixes": [[12, "bug-fixes"], [12, "id44"], [12, "id55"], [12, "id59"], [12, "id66"]], "4.2.0": [[12, "id36"], [13, "id18"]], "4.1.0": [[12, "id40"], [13, "id19"]], "4.0.1": [[12, "id42"], [13, "id20"]], "4.0.0": [[12, "id45"], [13, "id21"]], "3.1.0": [[12, "id48"], [13, "id22"]], "3.0.0": [[12, "id50"], [13, "id23"]], "2.3.0": [[12, "id53"], [13, "id24"]], "2.2.0": [[12, "id56"], [13, "id25"]], "2.1.2": [[12, "id58"], [13, "id26"]], "2.1.1": [[12, "id60"], [13, "id27"]], "2.1.0": [[12, "id62"], [13, "id28"]], "2.0.2": [[12, "id65"], [13, "id30"]], "2.0.1": [[12, "id67"], [13, "id31"]], "2.0.0": [[12, "id69"], [13, "id32"]], "1.0.0": [[12, "id71"], [13, "id33"]], "Package apache-airflow-providers-trino": [[13, "package-apache-airflow-providers-trino"]], "Apache Trino Connection": [[14, "apache-trino-connection"]], "Default Connection IDs": [[14, "default-connection-ids"]], "Configuring the Connection": [[14, "configuring-the-connection"]], "apache-airflow-providers-trino": [[15, "apache-airflow-providers-trino"]], "apache-airflow-providers-trino package": [[15, "apache-airflow-providers-trino-package"]], "Provider package": [[15, "provider-package"]], "Installation": [[15, "installation"]], "Requirements": [[15, "requirements"]], "Cross provider package dependencies": [[15, "cross-provider-package-dependencies"]], "Downloading official packages": [[15, "downloading-official-packages"]], "Installing from sources": [[16, "installing-from-sources"]], "Released packages": [[16, "released-packages"]], "Release integrity": [[16, "release-integrity"]], "Verifying PyPI releases": [[16, "verifying-pypi-releases"]], "Trino operator": [[17, "trino-operator"]], "Google Cloud Storage to Trino Transfer Operator": [[18, "google-cloud-storage-to-trino-transfer-operator"]], "Load CSV from GCS to Trino Table": [[18, "load-csv-from-gcs-to-trino-table"]], "TrinoOperator": [[19, "trinooperator"]], "Using the Operator": [[19, "using-the-operator"]], "Releasing security patches": [[20, "releasing-security-patches"]]}, "indexentries": {"airflow.providers.trino.datasets": [[0, "module-airflow.providers.trino.datasets"]], "module": [[0, "module-airflow.providers.trino.datasets"], [1, "module-airflow.providers.trino.datasets.trino"], [2, "module-airflow.providers.trino.hooks"], [3, "module-airflow.providers.trino.hooks.trino"], [4, "module-airflow.providers.trino"], [5, "module-airflow.providers.trino.operators"], [6, "module-airflow.providers.trino.operators.trino"], [7, "module-airflow.providers.trino.transfers.gcs_to_trino"], [8, "module-airflow.providers.trino.transfers"], [9, "module-tests.system.providers.trino.example_gcs_to_trino"], [10, "module-tests.system.providers.trino.example_trino"], [11, "module-tests.system.providers.trino"]], "airflow.providers.trino.datasets.trino": [[1, "module-airflow.providers.trino.datasets.trino"]], "sanitize_uri() (in module airflow.providers.trino.datasets.trino)": [[1, "airflow.providers.trino.datasets.trino.sanitize_uri"]], "airflow.providers.trino.hooks": [[2, "module-airflow.providers.trino.hooks"]], "t (in module airflow.providers.trino.hooks.trino)": [[3, "airflow.providers.trino.hooks.trino.T"]], "trinoexception": [[3, "airflow.providers.trino.hooks.trino.TrinoException"]], "trinohook (class in airflow.providers.trino.hooks.trino)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook"]], "airflow.providers.trino.hooks.trino": [[3, "module-airflow.providers.trino.hooks.trino"]], "conn_name_attr (airflow.providers.trino.hooks.trino.trinohook attribute)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.conn_name_attr"]], "conn_type (airflow.providers.trino.hooks.trino.trinohook attribute)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.conn_type"]], "default_conn_name (airflow.providers.trino.hooks.trino.trinohook attribute)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.default_conn_name"]], "generate_trino_client_info() (in module airflow.providers.trino.hooks.trino)": [[3, "airflow.providers.trino.hooks.trino.generate_trino_client_info"]], "get_conn() (airflow.providers.trino.hooks.trino.trinohook method)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.get_conn"]], "get_first() (airflow.providers.trino.hooks.trino.trinohook method)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.get_first"]], "get_isolation_level() (airflow.providers.trino.hooks.trino.trinohook method)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.get_isolation_level"]], "get_openlineage_database_dialect() (airflow.providers.trino.hooks.trino.trinohook method)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.get_openlineage_database_dialect"]], "get_openlineage_database_info() (airflow.providers.trino.hooks.trino.trinohook method)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.get_openlineage_database_info"]], "get_openlineage_default_schema() (airflow.providers.trino.hooks.trino.trinohook method)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.get_openlineage_default_schema"]], "get_pandas_df() (airflow.providers.trino.hooks.trino.trinohook method)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.get_pandas_df"]], "get_records() (airflow.providers.trino.hooks.trino.trinohook method)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.get_records"]], "hook_name (airflow.providers.trino.hooks.trino.trinohook attribute)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.hook_name"]], "insert_rows() (airflow.providers.trino.hooks.trino.trinohook method)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.insert_rows"]], "query_id (airflow.providers.trino.hooks.trino.trinohook attribute)": [[3, "airflow.providers.trino.hooks.trino.TrinoHook.query_id"]], "__version__ (in module airflow.providers.trino)": [[4, "airflow.providers.trino.__version__"]], "airflow.providers.trino": [[4, "module-airflow.providers.trino"]], "airflow.providers.trino.operators": [[5, "module-airflow.providers.trino.operators"]], "trinooperator (class in airflow.providers.trino.operators.trino)": [[6, "airflow.providers.trino.operators.trino.TrinoOperator"]], "airflow.providers.trino.operators.trino": [[6, "module-airflow.providers.trino.operators.trino"]], "on_kill() (airflow.providers.trino.operators.trino.trinooperator method)": [[6, "airflow.providers.trino.operators.trino.TrinoOperator.on_kill"]], "template_ext (airflow.providers.trino.operators.trino.trinooperator attribute)": [[6, "airflow.providers.trino.operators.trino.TrinoOperator.template_ext"]], "template_fields (airflow.providers.trino.operators.trino.trinooperator attribute)": [[6, "airflow.providers.trino.operators.trino.TrinoOperator.template_fields"]], "template_fields_renderers (airflow.providers.trino.operators.trino.trinooperator attribute)": [[6, "airflow.providers.trino.operators.trino.TrinoOperator.template_fields_renderers"]], "ui_color (airflow.providers.trino.operators.trino.trinooperator attribute)": [[6, "airflow.providers.trino.operators.trino.TrinoOperator.ui_color"]], "gcstotrinooperator (class in airflow.providers.trino.transfers.gcs_to_trino)": [[7, "airflow.providers.trino.transfers.gcs_to_trino.GCSToTrinoOperator"]], "airflow.providers.trino.transfers.gcs_to_trino": [[7, "module-airflow.providers.trino.transfers.gcs_to_trino"]], "execute() (airflow.providers.trino.transfers.gcs_to_trino.gcstotrinooperator method)": [[7, "airflow.providers.trino.transfers.gcs_to_trino.GCSToTrinoOperator.execute"]], "template_fields (airflow.providers.trino.transfers.gcs_to_trino.gcstotrinooperator attribute)": [[7, "airflow.providers.trino.transfers.gcs_to_trino.GCSToTrinoOperator.template_fields"]], "airflow.providers.trino.transfers": [[8, "module-airflow.providers.trino.transfers"]], "bucket (in module tests.system.providers.trino.example_gcs_to_trino)": [[9, "tests.system.providers.trino.example_gcs_to_trino.BUCKET"]], "dag_id (in module tests.system.providers.trino.example_gcs_to_trino)": [[9, "tests.system.providers.trino.example_gcs_to_trino.DAG_ID"]], "env_id (in module tests.system.providers.trino.example_gcs_to_trino)": [[9, "tests.system.providers.trino.example_gcs_to_trino.ENV_ID"]], "path_to_file (in module tests.system.providers.trino.example_gcs_to_trino)": [[9, "tests.system.providers.trino.example_gcs_to_trino.PATH_TO_FILE"]], "trino_table (in module tests.system.providers.trino.example_gcs_to_trino)": [[9, "tests.system.providers.trino.example_gcs_to_trino.TRINO_TABLE"]], "gcs_csv_to_trino_table (in module tests.system.providers.trino.example_gcs_to_trino)": [[9, "tests.system.providers.trino.example_gcs_to_trino.gcs_csv_to_trino_table"]], "test_run (in module tests.system.providers.trino.example_gcs_to_trino)": [[9, "tests.system.providers.trino.example_gcs_to_trino.test_run"]], "tests.system.providers.trino.example_gcs_to_trino": [[9, "module-tests.system.providers.trino.example_gcs_to_trino"]], "schema (in module tests.system.providers.trino.example_trino)": [[10, "tests.system.providers.trino.example_trino.SCHEMA"]], "table (in module tests.system.providers.trino.example_trino)": [[10, "tests.system.providers.trino.example_trino.TABLE"]], "table1 (in module tests.system.providers.trino.example_trino)": [[10, "tests.system.providers.trino.example_trino.TABLE1"]], "table2 (in module tests.system.providers.trino.example_trino)": [[10, "tests.system.providers.trino.example_trino.TABLE2"]], "test_run (in module tests.system.providers.trino.example_trino)": [[10, "tests.system.providers.trino.example_trino.test_run"]], "tests.system.providers.trino.example_trino": [[10, "module-tests.system.providers.trino.example_trino"]], "trino_create_schema (in module tests.system.providers.trino.example_trino)": [[10, "tests.system.providers.trino.example_trino.trino_create_schema"]], "tests.system.providers.trino": [[11, "module-tests.system.providers.trino"]]}})