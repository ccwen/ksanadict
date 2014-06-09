ksanadict
=========

Ksana Dictionary Interface


create dummy database

    cd ~/dev2014/ksanadict
    mkdir ksana_databases
    cd ksana_databases
    gulp initdb --name=db1
    gulp initdb --name=db2

    cd ~/dev2014/ksanadict/ksana_databases/db1
    gulp mkdb
    cd ~/dev2014/ksanadict/ksana_databases/db2
    gulp mkdb