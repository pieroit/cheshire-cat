/**
 * user should be able to compose dashboard elements without having to do the plumbing to make them communicate
 */


/**
 * Form as prop of Door but as a unified object
 */
<CheshireCat>
    <Door
        path="/"
        form={
            formSchema={{}}
            formData={{}}
            uiSchema={{}}
        }>

        <Clock/>

        <Door
            path="/a"
            form={
                formSchema={{}}
                formData={{}}
                uiSchema={{}}
            }>
            <NetworkViz
                endpoints={['http://some.org', 'https://yeah.yeah']}
                mergeFilters={function(filtersArray){
                    // here you decide how to merge the filters
                }}
                composeRequest={function(endpoints, filters){
                    // here you compose an axios request
                }}
                onData={function(response){
                    // here you prep data
                }}>
                <VictoryPie // data will be passed as props from DataSource
                    x="lab"
                    y={ (d)=> d.val }
                    colorScale="qualitative"
                    startAngle={-90}
                    endAngle={90}
                />
            </NetworkViz>
        </Door>

        <Door path="/b">
            <Map/>
        </Door>

    </Door>
</CheshireCat>


<CheshireCat
    defaultEndpoint='http://something.org'
    user='user'
    pass='pass'
>
    <Door id="tab1">
        <ClockCard id="12dfg" endpoint="/posts">
            <Form formSchema={} formData={}>
            <PieChart x='ccc' y='zzz'>
            <DownloadAction/> <ShareAction/>
        </ClockCard>

        <ClockCard formSchema={} formData={}>
            <Clock/>
            <PieChart x='ccc' y='zzz' endpoint='http://adfsad.sdafasd.sdafafd.csv'/>
            <DownloadAction/> <ShareAction/>
        </ClockCard>

        <BigCard formSchema={} formData={}>
            <SimpleCard formSchema={} formData={} >
                <PieChart>
                <BarChart>
                <DownloadAction/>
            <SimpleCard/>
            <MapCard/>
            <ShareAction/>
        </BigCard>
    </Door>

    <Door id="tab2">
        <Card>
            <PieChart/>
        </Card>
    </Door>

</CheshireCat>
