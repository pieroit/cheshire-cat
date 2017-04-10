/**
 * user should be able to compose dashboard elements without having to do the plumbing to make them communicate
 */

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
